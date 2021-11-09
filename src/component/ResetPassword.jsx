import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useHistory } from 'react-router';


const ResetPassword = () => {
    const history = useHistory();

    const [initialValues, setinitialvalues] = useState({
        password: '',
    })

    //validation for adding users data 
    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required('Please Enter your password')
            .matches(
                "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$",
                "Must Contain 8 Characters, One Uppercase, One Lowercase and one special case Character"
            ),
        confirm_password: Yup.string()
            .required('Please Enter your password')
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    });



    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema}
            onSubmit={async (values) => {
                // same shape as initial values

                // const post = await axios.post(`https://61485ca2035b3600175b9dc6.mockapi.io/api/v1/users`, values)
                const post = await axios.put(`https://nodejs-task-5.herokuapp.com/:token/:email`, values)

                setinitialvalues(post)
                history.push("/")
            }}>


            {({ errors, touched }) => {
                return (
                    <>
                        <div className="container text-center"><h1 className="font-weight-bold text-dark">AddUser</h1></div>
                        <Form className="ml-5">
                            <div className="form-row">
                                <div className="form-group col-10">
                                    <label>Password</label>
                                    <Field name="password" type="text" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                    <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                </div>
                            </div>



                            <button className="btn btn-primary mr-2" type="submit">Submit</button>
                            <button className="btn btn-success mr-2" type="reset">Reset</button>
                        </Form>
                    </>
                );
            }}
        </Formik>

    );
}

export default ResetPassword;