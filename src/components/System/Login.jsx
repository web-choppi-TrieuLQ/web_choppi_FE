import React, {useContext} from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import './Login.css'
import {Link, useNavigate} from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { jwtDecode } from 'jwt-decode';


export const Login = ({setUserRole}) =>  {
    const navigate = useNavigate();

    const initialValues = {
        username: '',
        password: '',
        confirmPassword: '',
    };

    // Define validation schema using Yup
    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'), //.email('Invalid email format')
        password: Yup.string().required('Password is required').min(5, 'Password must be at least 5 characters'),
        confirmPassword: Yup.string()
            .required('Confirm password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match'),
    });


    // Define the submit handler function
    const handleSubmit = async (values) => {
        try {
            console.log(values)
            localStorage.clear();
            // Send the form data to the back-end API using axios
            const response = await axios.post('http://localhost:8080/choppi/auth/token', values);

            if (response.data.code === 1000) {
                const token = response.data.result.token;

                console.log("Token: " + token)

                // Lưu trữ token trong localStorage
                localStorage.setItem('token', token);

                // Giải mã token để lấy thông tin người dùng`
                const decodedToken = jwtDecode(token);

                localStorage.setItem('userId', decodedToken.userId)

                // Kiểm tra vai trò và quyền trong token
                console.log('Role:', decodedToken.scope);

                // Cập nhật userRole ở App.js
                setUserRole(decodedToken.scope);

                // Chuyển hướng người dùng dựa trên vai trò hoặc quyền
                if (decodedToken.scope === 'ADMIN') {
                    navigate('/admin/home');
                } else {
                    // Chuyển hướng đến trang người dùng
                    navigate('/home/latestProduct');
                }
            }

            // Handle the response (e.g., navigate to another page or show a success message)
            // console.log(response.data.result.token);
        } catch (error) {
            // Handle any errors (e.g., show an error message)
            console.error(error);
        }
    };

    return (

        <MDBContainer fluid className="p-3 my-5 h-custom">

            <MDBRow>

                <MDBCol col='10' md='6'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
                </MDBCol>

                <MDBCol col='4' md='6'>

                    <div className="d-flex flex-row align-items-center justify-content-center">

                        <p className="lead fw-normal mb-0 me-3">Sign in with</p>

                        <MDBBtn floating size='md' tag='a' className='me-2'>
                            <MDBIcon fab icon='facebook-f' />
                        </MDBBtn>

                        <MDBBtn floating size='md' tag='a'  className='me-2'>
                            <MDBIcon fab icon='twitter' />
                        </MDBBtn>

                        <MDBBtn floating size='md' tag='a'  className='me-2'>
                            <MDBIcon fab icon='linkedin-in' />
                        </MDBBtn>

                    </div>

                    <div className="divider d-flex align-items-center my-4">
                        <p className="text-center fw-bold mx-3 mb-0">Or</p>
                    </div>
                    {/* Formik form */}
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                {/* Username input */}
                                <div className="mb-4">
                                    <Field
                                        as={MDBInput}
                                        wrapperClass='mb-4'
                                        label='Username'
                                        id='formControlLg'
                                        name='username'
                                        type='text' // if email, type email
                                        size="lg"
                                    />
                                    <ErrorMessage name='username' component='div' className='text-danger' />
                                </div>

                                {/* Password input */}
                                <div className="mb-4">
                                    <Field
                                        as={MDBInput}
                                        wrapperClass='mb-4'
                                        label='Password'
                                        id='formControlLg'
                                        name='password'
                                        type='password'
                                        size="lg"
                                    />
                                    <ErrorMessage name='password' component='div' className='text-danger' />
                                </div>

                                {/* Confirm password input */}
                                <div className="mb-4">
                                    <Field
                                        as={MDBInput}
                                        wrapperClass='mb-4'
                                        label='Confirm password'
                                        id='formControlLg'
                                        name='confirmPassword'
                                        type='password'
                                        size="lg"
                                    />
                                    <ErrorMessage name='confirmPassword' component='div' className='text-danger' />
                                </div>

                                {/* Remember me checkbox and forgot password link */}
                                <div className="d-flex justify-content-between mb-4">
                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                                    <a href="!#">Forgot password?</a>
                                </div>

                                {/* Login button */}
                                <div className='text-center text-md-start mt-4 pt-2'>
                                    <MDBBtn type='submit' className="mb-0 px-5" size='lg'>Login</MDBBtn>
                                    <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account?
                                        <Link to="/register" className="link-danger">Register</Link>
                                    </p>
                                </div>
                            </Form>
                        )}
                    </Formik>

                </MDBCol>

            </MDBRow>

            <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

                <div className="text-white mb-3 mb-md-0">
                    Copyright © 2024 By TRIEULQ1608
                </div>

                <div>

                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                        <MDBIcon fab icon='facebook-f' size="md"/>
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
                        <MDBIcon fab icon='twitter' size="md"/>
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
                        <MDBIcon fab icon='google' size="md"/>
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
                        <MDBIcon fab icon='linkedin-in' size="md"/>
                    </MDBBtn>

                </div>

            </div>

        </MDBContainer>
    );
}