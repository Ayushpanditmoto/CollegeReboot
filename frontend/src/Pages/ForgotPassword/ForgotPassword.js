import React, { useState } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import EmailInput from "./EmailInput";
import * as Yup from "yup";

const LoginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email is required"),
});

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <ResetContainer>
        <ResetHeader>
          <h1>Forgot Password</h1>
          <h2>No worries, we'll send you reset instructions.</h2>
        </ResetHeader>
        <ResetForm>
          <Formik
            enableReinitialize
            initialValues={{
              email,
            }}
            validationSchema={LoginValidationSchema}
          >
            {(formik) => (
              <Form>
                <EmailInput
                  name="email"
                  placeholder="Enter Your Email"
                  type="email"
                  onChange={handleEmailChange}
                />

                <button type="submit">Reset Password</button>
              </Form>
            )}
          </Formik>
          <Link to="/" className="back-to-login">
            &#8592; Back To Login
          </Link>
        </ResetForm>
      </ResetContainer>
    </>
  );
}

export default ForgotPassword;

const ResetContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--bg-secondary);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ResetHeader = styled.div`
  width: 300px;
  display: flex;
  margin: 100px 0 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 1.6rem;
    font-weight: 900;
    color: #0088ff;
    margin-bottom: 8px;
  }
  h2 {
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    color: var();
  }
`;

const ResetForm = styled.div`
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
  button {
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
    background-color: var(--blue-color);
    color: #fff;
    font-size: 1.2rem;
    box-shadow: var(--shadow-1);
    font-weight: 600;
    cursor: pointer;
    margin: 10px 0;
  }
  .back-to-login:hover {
    text-decoration: underline;
  }
`;
