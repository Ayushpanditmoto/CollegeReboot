import React from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

function RegisterForm() {
  return (
    <Registeration>
      <div className='blur'>
        <div className='register_form'>
          <div className='register_header'>
            <AiOutlineClose />
            <span>Sign Up </span>
            <span>it's quick and easy</span>
          </div>
        </div>
      </div>
    </Registeration>
  );
}

export default RegisterForm;

const Registeration = styled.div`
  .register_form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    /* background: var(--bg-primary); */
  }
`;
