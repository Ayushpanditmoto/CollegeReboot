import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <LoginContainer>
        <LoginHeader>
          <h1>CollegeWindow</h1>
          <h2>
            CollegeWindow helps you to connect with people in Jadavpur
            University
          </h2>
        </LoginHeader>
        <LoginForm>
          <Formik initialValues={{ email: '', password: '' }}>
            {(formik) => (
              <Form>
                <input type='email' name='email' placeholder='Email' />
                <input type='password' name='password' placeholder='Password' />
                <button type='submit'>Login</button>
              </Form>
            )}
          </Formik>
          <Link to='/forgot' className='forgot'>
            Forgotten Password ?
          </Link>
          <div className='sign_splitter'></div>
          <button className='signup'>
            <Link to='/signup'>Sign Up</Link>
          </button>
        </LoginForm>
      </LoginContainer>
    </>
  );
}

export default Login;

const LoginContainer = styled.div`
  width: 100%;
  height: 90vh;
  background-color: var(--bg-secondary);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const LoginHeader = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  padding: 100px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 2.5rem;
    font-weight: 900;
    color: #0088ff;
    /* margin: 10px; */
  }
  h2 {
    font-size: 1.1rem;
    font-weight: 400;
    text-align: center;
    color: var();
  }
`;

const LoginForm = styled.div`
  background-color: var(--bg-primary);
  height: fit-content;
  width: 350px;
  border-radius: 10px;
  display: flex;
  box-shadow: 0 1px 2px var(--shadow-1);
  padding: 1rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  input {
    width: 100%;
    height: 50px;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    background-color: var(--bg-third);
    font-size: 1.2rem;
    border-radius: 5px;
    padding: 0 10px;
    margin: 10px 0;
  }
  button {
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
    background-color: var(--blue-color);
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    margin: 10px 0;
  }
  .forgot:hover {
    text-decoration: underline;
  }
  .sign_splitter {
    width: 100%;
    height: 1px;
    background-color: var(--bg-third);
    margin: 10px 0;
  }
  .signup {
    background-color: var(--green-color);
    width: 70% !important;
    margin: 10px 0;
    font-weight: 600 !important;
    font-size: 18px !important;
  }
`;
