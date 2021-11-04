import React, { useState } from 'react'

import { useHistory } from 'react-router-dom';
import axios from 'axios';



// Add User details component 
const ForgotPassword = () => {


    const url = `/register`;
    const history = useHistory();

    const [errors, seterrors] = useState('email already')
    const [form_data, setform_data] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: ''
    });

    //Submit Button function call 
    const submit = async (e) => {
        e.preventDefault();

        // condition if the data filled is empty it will show toaster

        const post = await axios.post(url, form_data).then((res) => {
            setform_data(post);
            history.push("/")
        }).catch((e) => {
            console.log(e.response.data)
            seterrors(e.response.data.errors)
        })


        //history is use to navigate to userlist


    }

    // onchange function call of handlevent for form filling 
    const handlevent = (e) => {

        // targeting id from form 
        const name = e.target.id;

        //pushing the data 
        setform_data({ ...form_data, [name]: e.target.value });
    }

    return <>
        <div className="container text-center"><h1 className="font-weight-bold text-dark">Add User</h1></div>
        <div>{errors}</div>
        <form>
            <div class="mb-3">
                <lable>first name</lable>
                <input type="text" id="first_name" class="form-control" name="fname" value={form_data.first_name} onChange={handlevent} />

            </div>
            <div class="mb-3">
                <lable>last name</lable>
                <input type="text" id="last_name" class="form-control" value={form_data.last_name} onChange={handlevent} />

            </div><div class="mb-3">
                <lable>email</lable>
                <input type="email" id="email" class="form-control" value={form_data.email} onChange={handlevent} />

            </div><div class="mb-3">
                <lable>password</lable>
                <input type="text" id="password" class="form-control" name="email" value={form_data.password} onChange={handlevent} />

            </div>
            <div class="mb-3">
                <lable>confirm password</lable>
                <input id="confirm_password" type="text" class="form-control" name="email" value={form_data.confirm_password} onChange={handlevent} />
            </div>

            <button type="submit" class="btn btn-primary" onClick={(e) => submit(e)}>Submit</button>
        </form>
        {/* <Container className="themed-container" style={{ "width": "70%" }}>
            <Form method="POST">
                <FormGroup row className="py-3">
                    <TextField color="warning" id="fname" label="First name" type="text" variant="filled" name="fname" value={form_data.first_name} onChange={handlevent} autoComplete="off" required />
                </FormGroup>
                <FormGroup row className="py-3">
                    <TextField required color="warning" id="lname" label="Last name" type="text" variant="filled" name="lname" value={form_data.last_name} onChange={handlevent} />
                </FormGroup>
                <FormGroup row className="py-3">
                    <TextField required color="warning" id="email_id" label="Email_id" type="email" variant="filled" name="email" value={form_data.email} onChange={handlevent} />
                </FormGroup>
                <FormGroup row className="py-3">
                    <TextField required color="warning" id="email_id" label="Email_id" type="email" variant="filled" name="email" value={form_data.password} onChange={handlevent} />
                </FormGroup>
                <FormGroup row className="py-3">
                    <TextField required color="warning" id="email_id" label="Email_id" type="email" variant="filled" name="email" value={form_data.confirm_password} onChange={handlevent} />
                </FormGroup>
                <FormGroup row>
                    <Button className="mt-3 py-1" style={{ "width": "100%" }} variant="contained" onClick={(e) => submit(e)}>Submit</Button>
                </FormGroup>
                <ToastContainer />
            </Form>
        </Container> */}
    </>
}

export default ForgotPassword