
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';


const Password = () => {
    const history = useHistory();

    const [initialValues, setinitialvalues] = useState({

        email: '',

    })

    //validation for adding users data 
    const validationSchema = Yup.object().shape({

        email: Yup.string().matches(
            "^[a-z0-9](.?[a-z0-9]){5,}@g(oogle)?mail.com$",
            "At least five alphanumeric characters and Must contain @gmail.com"
        )
            .email('Email is invalid')
            .required('Email is required'),
    });



    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema}
            onSubmit={async (values) => {
                // same shape as initial values

                // const post = await axios.post(`https://61485ca2035b3600175b9dc6.mockapi.io/api/v1/users`, values)
                const post = await axios.put(`https://nodejs-task-5.herokuapp.com/forget_password`, values)

                setinitialvalues(post)
                history.push("/")
            }}>


            {({ errors, touched }) => {
                return (
                    <>
                        <div className="container text-center"><h1 className="font-weight-bold text-dark">LogIn</h1></div>
                        <Form className="ml-5">
                            <div className="form-row">
                                <div className="form-group col-10">
                                    <label>Email</label>
                                    <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                </div>

                            </div>

                            <button className="btn btn-primary mr-2" type="submit">Submit</button>
                            {/* <button className="btn btn-success mr-2" type="reset">Reset</button> */}
                            <span>Back to Login <Link to='/'>LogIn</Link></span>
                            {/* <p className="foreget_password_link">Foreget Password <Link to='/password'>ForgetPassword</Link></p> */}
                        </Form>
                    </>
                );
            }}
        </Formik>

    );
}
export default Password
