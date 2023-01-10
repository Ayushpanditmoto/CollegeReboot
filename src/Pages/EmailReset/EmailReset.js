import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function emailReset() {
  return (
    <div>
      <Link to='/emailreset'>
          <ResetWrap>
            <Title>Code Verification</Title>
            <Text>Please enter code that has been sent to your email.</Text>
            <Input placeholder='Code' type='number'></Input>
            <ButtonWrap>
                <Cancel>Cancel</Cancel>
                <button>Continue</button>
            </ButtonWrap>
          </ResetWrap>

      </Link>
    </div>
  )
}

export default emailReset

const ResetWrap = styled.div`
    border:2px solid black;
    display:block;
    width:45%;
    margin:auto;
    margin-top:15%;
    padding:2%;
    border-radius:10px;
`;
const Title = styled.h1`
    font-size:1.5rem;
    margin-bottom:1rem;
`;
const Text = styled.p`
    margin-bottom:1rem
`;
const Input = styled.input`
    font-size:1.2rem;
    display:block;
    margin:auto;
    margin-bottom:2rem;
    border-radius:5px;
    padding:0.5rem;
`;
const ButtonWrap = styled.div`
    display:flex;
    justify-content:flex-end;
`;
const Cancel = styled.button`
    background-color:#D3D3D3;
    color:black;
    margin-right:1rem;
`;
