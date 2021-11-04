import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';



export const Register = () => {
    const history = useHistory();

    const [initialValues, setinitialvalues] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: ''
    })

    //validation for adding users data 
    const validationSchema = Yup.object().shape({
        first_name: Yup.string().min(3, 'Too Short!').max(30, 'Too Long!')
            .required('First Name is required'),
        last_name: Yup.string().min(3, 'Too Short!').max(30, 'Too Long!')
            .required('Last Name is required'),
        password: Yup.string()
            .required('Please Enter your password')
            .matches(
                "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$",
                "Must Contain 8 Characters, One Uppercase, One Lowercase and one special case Character"
            ),
        email: Yup.string().matches(
            "^[a-z0-9](.?[a-z0-9]){5,}@g(oogle)?mail.com$",
            "At least five alphanumeric characters and Must contain @gmail.com"
        )
            .email('Email is invalid')
            .required('Email is required'),
        confirm_password: Yup.string()
            .required('Please Enter your password')
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    });



    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema}
            onSubmit={async (values) => {
                // same shape as initial values

                // const post = await axios.post(`https://61485ca2035b3600175b9dc6.mockapi.io/api/v1/users`, values)
                const post = await axios.post(`https://nodejs-task-5.herokuapp.com/register`, values)

                setinitialvalues(post)
                history.push("/")
            }}>


            {({ errors, touched }) => {
                return (
                    <>
                        <div className="container text-center"><h1 className="font-weight-bold text-dark">Please Register</h1></div>
                        <Form className="ml-5">

                            <div className="form-row">

                                <div className="form-group col-5">
                                    <label>First Name</label>
                                    <Field name="first_name" type="text" className={'form-control' + (errors.first_name && touched.first_name ? ' is-invalid' : '')} />
                                    <ErrorMessage name="first_name" component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-group col-5">
                                    <label>Last Name</label>
                                    <Field name="last_name" type="text" className={'form-control' + (errors.last_name && touched.last_name ? ' is-invalid' : '')} />
                                    <ErrorMessage name="last_name" component="div" className="invalid-feedback" />
                                </div>
                            </div>
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

                            <div className="form-row">
                                <div className="form-group col-10">
                                    <label>Confirm Password</label>
                                    <Field name="confirm_password" type="text" className={'form-control' + (errors.confirm_password && touched.confirm_password ? ' is-invalid' : '')} />
                                    <ErrorMessage name="confirm_password" component="div" className="invalid-feedback" />
                                </div>
                            </div>

                            <button className="btn btn-primary mr-2" type="submit">Submit</button>
                            <button className="btn btn-success mr-2" type="reset">Reset</button>
                            <span>Already SingUp please<Link to='/'>LogIn</Link></span>
                        </Form>
                    </>
                );
            }}
        </Formik>

    );
}

