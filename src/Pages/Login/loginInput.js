import React from "react";
import styled from "styled-components";
import { useField, ErrorMessage } from "formik";
import { MdError } from "react-icons/md";
function LoginInput({ placeholder, bottom, ...props }) {
  const [field, meta] = useField(props);
  return (
    <InputWrap>
      {meta.touched && meta.error && !bottom && (
        <ErrorMessage component={InputError} name={field.name} />
      )}

      <input
        className={meta.touched && meta.error && "input_error_border"}
        type={field.type}
        name={field.name}
        placeholder={placeholder}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && bottom && (
        <ErrorMessage component={InputError} name={field.name} />
      )}
      {meta.touched && meta.error && (
        <MdError color="#e20000" className="error_icon" />
      )}
    </InputWrap>
  );
}

export default LoginInput;

const InputWrap = styled.div`
  position: relative;
  width: 320px;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-1);
  /* justify-content: center; */
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
  input:focus {
    border: 1px solid #0088ff !important;
  }
  .input_error_border {
    border: 1px solid red;
    border-color: red !important;
  }
  .error_icon {
    position: absolute;
    top: 18px;
    right: 10px;
    width: 30px;
    height: 30px;
  }
`;

const InputError = styled.div`
  position: absolute;
  top: -40px;
  background-color: #e20000;
  width: 320px;
  margin: 0 auto;
  color: white;
  font-size: 1rem;
  transition: all 0.7s ease-in-out;

  display: flex;
  padding: 10px 0;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;
