import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';


export const Login = () => {
    const history = useHistory();

    const [initialValues, setinitialvalues] = useState({

        email: '',
        password: ''
    })

    //validation for adding users data 
    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required('Please Enter your password')
            .matches(
                "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$",
                "Must Contain 8 Characters, One Uppercase, One Lowercase and one special case Character"
            ),
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

                try {
                    const post = await axios.post(`https://nodejs-task-5.herokuapp.com/singin`, values)
                    alert('login successfull')
                    setinitialvalues(post)
                    history.push("/homepage")
                } catch {
                    alert('invalid')
            }
               
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
                            <div className="form-row">
                                <div className="form-group col-10">
                                    <label>Password</label>
                                    <Field name="password" type="text" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                    <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                </div>

                            </div>

                            <button className="btn btn-primary mr-2" type="submit">Submit</button>
                           
                            <span> Don't have accound please  <Link to='/register'>SingUp</Link></span>
                            <p className="foreget_password_link">Foreget Password <Link to='/password'>ForgetPassword</Link></p>
                        </Form>
                    </>
                );
            }}
        </Formik>

    );
}

