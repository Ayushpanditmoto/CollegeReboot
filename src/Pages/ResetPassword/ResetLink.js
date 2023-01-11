import React from "react";
import styled from "styled-components";
import { Formik, Form , Field } from "formik";
import { FaUserCircle } from 'react-icons/fa';



function ResetLink() {  
  
  
  const handleEmailLink = ( e)=>{
    const { name, value } = e.target;
     
    console.log( value);
  }



  return (
    <>
      <ResetContainer>
        <ResetHeader></ResetHeader>
        <ResetForm>
          <h2>Reset Your Password</h2>          
          <Formik          
            enableReinitialize           
          >
            {( formik ) => (
            <Form onSubmit={ formik.handleSubmit }>
              <ResetLinkWrapper>     
                  <div className="questionWrapper">
                    <label>
                        How do you want to receive the code to reset your password?
                    </label>  
                  </div>       
                  <div className='reg_grid'>
                      <div className='emailLinkWrapper'>
                          <label htmlFor='userEmailLink'>
                          <Field
                              type='radio'
                              name='emailLink'
                              id='userEmailLink'
                              value='userEmailLink'  
                              checked     
                              onChange={ handleEmailLink }                   
                            />
                            <span>Send code via email </span>
                            <span className="emailAddress">email@email.com</span>
                            </label>
                      </div>
                      <div className='fbUserCircleWrapper'>
                            <FaUserCircle />
                            <label>email@email.email<br/>Facebook user</label>
                      </div>                
                  </div>     
              </ResetLinkWrapper>

              <ButtonWrapper>
                <button type='reset'>Cancel</button>
                <button>Search</button>
              </ButtonWrapper>
            </Form>
            )}
          </Formik>
        </ResetForm>
      </ResetContainer>
    </>
  );
}

export default ResetLink;

const ResetContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--bg-secondary);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1rem;
`;

const ResetHeader = styled.div`
  width: 300px;
  display: flex;
  margin: 100px 0 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ResetLinkWrapper = styled.div`
  display: flex;
  flex-direction:column;  
  min-width: 100%;
  padding: 15px 0 0 25px;
  height: fit-content;

  .questionWrapper{
    max-width: 200px;
  }
  
 .reg_grid{
   display:inherit;
   flex-direction: row;
   justify-content:space-between;
   margin-top: 15px;
   max-width: 100%;
 }

 .emailLinkWrapper{
    margin-top: 15px;
    max-width: 170px;
    height:fit-content;
 }

 .emailLinkWrapper input{
   margin-right: 5px;
 }

 .emailAddress{
   padding: 15.7px;
 }

 .fbUserCircleWrapper{
   position: relative;
   bottom:74px;
   text-align: center;   
 }

 .fbUserCircleWrapper svg{
    width:50%;
    height:50%;
    color:var(--bg-third);
 }

 .fbUserCircleWrapper label{
    padding-top:5px;
 }
 

@media screen and (max-width: 768px) {

   padding: 0px;
   padding-top:10px;

  .reg_grid{    
    flex-direction: column;    
    align-items: center;
    margin-top:2em;
 }

  .questionWrapper{
    max-width: fit-content;
    text-align:center;
  }
  
 .emailLinkWrapper{
    margin: 10px 0px 8em 0;
    max-width: 170px;
 }


}
`;


const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 8px;
  width: 100%;


  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    
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
    text-align: left;
    color: #0088ff;
    padding-bottom: 8px;
    margin-bottom: 8px;
    border-bottom: solid 1px var(--bg-third);
  }

  p {
    padding: 10px 0px;
    text-align: center;
  }

  hr {
    height: 1px;
    width: 100%;
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

  [type="reset"] {
    background-color: var(--bg-third);
    color: var(--color-secondary);
  }

 

  @media screen and (max-width: 768px) {
    width: 100%;
    
  }
`;
