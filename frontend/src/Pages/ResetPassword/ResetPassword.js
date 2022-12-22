import React, { useState } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import PasswordInput from "./PasswordInput";
import {  redirect } from "react-router-dom";
import * as Yup from "yup";

const PasswordValidationSchema = Yup.object({

  password: Yup.string()
    .min(8, 'Password is Too Short!')
    .max(50, 'Password is Too Long!')
    .required("Password is required"),

  confirmPassword: Yup.string()  
    .min(8, 'Password is Too Short!')
    .max(50, 'Password is Too Long!')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required("Confirm Password is required"),

});



function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword ] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  
  const clearInput = () =>{
    setPassword('')
    setConfirmPassword('')
  }

  const handleSubmit = async (e) =>{
   
     e.preventDefault();

      const response = fetch('/reset-password',{
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          password: password,
          Authorization: 'TestReturnedToken',
        })
      })

      console.log( response );

      if (!response.ok) {           
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

      return redirect("/");  
    
  }

  return (
    <>
      <ResetContainer>
        <ResetHeader></ResetHeader>
        <ResetForm>
        <h2>Change Password</h2>    
        <p>Pick a strong password</p>
          <Formik
            enableReinitialize
            initialValues={{
              password,
              confirmPassword
            }}
            validationSchema={PasswordValidationSchema}
            onSubmit={ handleSubmit }
          >
            <Form>             
                <PasswordInput
                  name="password"
                  placeholder="New Password"
                  type="password"
                  onChange={ handlePasswordChange }
                />

                <PasswordInput
                  name="confirmPassword"
                  placeholder="Confirm new Password"
                  type="password"
                  onChange={ handleConfirmPasswordChange }
                />
                
                <ButtonWrapper>
                  <button type="reset" onClick={ clearInput }>Cancel</button>
                  <button type="submit">Continue</button>
                </ButtonWrapper>
              </Form>            
          </Formik>          
        </ResetForm>
      </ResetContainer>
    </>
  );
}

export default ResetPassword;

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
`;

const ButtonWrapper = styled.div`
  display:flex;
  justify-content: center;
  margin-top:8px;
  border-top: solid 1px var(--bg-third);
  width:100%;

  @media screen and (max-width: 768px) {
    display:flex;
    justify-content: space-evenly;;
  }
`;

const ResetForm = styled.div`
  background-color: var(--bg-primary);
  height: fit-content;
  width: 550px;  
  border-radius: 10px;
  display: flex;
  box-shadow: 0 1px 2px var(--shadow-1);
  padding: 1rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;  

  h2 {
    font-size: 1.6rem;
    font-weight: 900;
    text-align: center;
    color: #0088ff;
    padding-bottom:8px;
    margin-bottom: 8px;
    border-bottom: solid 1px var(--bg-third);
  }
 
  p{
    padding:10px 0px;
    text-align: center;
  }

  hr{
    height:1px;
    width:100%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }
  
  button {
    width: 110px;
    padding: 8px 5px;
    border: none;
    outline: none;
    background-color: var(--blue-color);
    color: #fff;
    font-size: 1.2rem;
    box-shadow: var(--shadow-1);
    font-weight: 600;
    cursor: pointer;
    margin: 10px 5px;
  } 

  [type="reset"]{
    background-color:var(--bg-third);
    color: var(--color-secondary);
  }


  @media screen and (max-width: 300px) {
		width:100vw;
	}

  @media screen and (max-width: 768px) {
    width: 100vw
  }
`;
