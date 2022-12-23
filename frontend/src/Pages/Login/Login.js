import React, { useState, useRef } from "react";
import styled from "styled-components";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import LoginInput from "./loginInput";
import * as Yup from "yup";

// import RegisterForm from './Components/Login/RegisterForm';
import Loading from "../../Components/Loading";
import axios from "axios";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const loginInfos = {
  email: "",
  password: "",
};

const LoginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password is Too Short!")
    .max(50, "Password is Too Long!")
    .required("Password is required"),
});

//JSON.stringify(login) is used to convert the object into a string
//JSON.parse(login) is used to convert the string into an object
// ... operator is used to copy the values of one or more source objects to a target object
// console.log(`${[name]}: ${value}`); // email: what you type in email input
// console.log(
//   `${[
//     name,
//   ]}: ${value} name: ${name}, value: ${value}, login: ${JSON.stringify(
//     login
//   )}`
// ); // {email: "", password: ""}

function Login() {
  const [Error, setError] = useState("");
  const [Success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginSubmit = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/login`,
        {
          email,
          password,
        }
      );
      setLoading(false);
      setSuccess(data.message);
      Cookies.set("user", data.token);
      dispatch({ type: "LOGIN", payload: data.user });
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (error) {
      setError(error.response.data.error);
      setLoading(false);
    }
  };

  const [login, setLogin] = useState(loginInfos);
  const { email, password } = login;
  const [toggleEye, setToggleEye] = useState(<AiOutlineEyeInvisible />);
  const [isPasswordVisible, setIspasswordVisible] = useState(false);
  const inputRef = useRef(null);

  const showPassword = () => {
    const passwordInput = inputRef.current.firstElementChild.firstElementChild;

    if (!isPasswordVisible) {
      setIspasswordVisible(true);
      passwordInput.setAttribute("type", "text");
      setToggleEye(<AiOutlineEye />);
    } else {
      setIspasswordVisible(false); 
      passwordInput.setAttribute("type", "password");
      setToggleEye(<AiOutlineEyeInvisible />);
    }
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  return (
    <>
      <LoginContainer>
        <LoginHeader>
          <h1>CollegeReboot</h1>
          <h2>
            CollegeReboot helps you to connect with people in Jadavpur
            University
          </h2>
        </LoginHeader>
        <LoginForm>
          <Formik
            enableReinitialize
            initialValues={{
              email,
              password,
            }}
            validationSchema={LoginValidationSchema}
            onSubmit={() => {
              handleLoginSubmit();
            }}
          >
            {(formik) => (
              <Form>
                <LoginInput
                  name="email"
                  placeholder="Email"
                  type="email"
                  onChange={handleLoginChange}
                />
                <div className="password-wrapper" ref={inputRef}>
                  <LoginInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleLoginChange}
                  />
                </div>
                <span className="eyeslash-icon" onClick={showPassword}>
                  {toggleEye}
                </span>

                <button type="submit" onSubmit={formik.handleSubmit}>
                  Login
                </button>
                {loading && <Loading />}
                {Error && <ErrorRegister>{Error}</ErrorRegister>}
                {Success && <SuccessRegister>{Success}</SuccessRegister>}
              </Form>
            )}
          </Formik>
          <Link to="/forgot" className="forgot">
            Forgotten Password ?
          </Link>
          <div className="sign_splitter"></div>
          <Link to="/signup">
            <button className="signup">Sign Up</button>
          </Link>
        </LoginForm>
      </LoginContainer>
      {/* <RegisterForm /> */}
      <Footer>
        <p>© {new Date().getFullYear()} CollegeReboot</p>
      </Footer>
    </>
  );
}

export default Login;

const ErrorRegister = styled.div`
  color: #c63b2c;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  padding: 10px 0;
`;

const SuccessRegister = styled.div`
  color: #00efa7;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  padding: 10px 0;
`;

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
  /* input {
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
  } */
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
    width: 200px;
    height: 50px;
    border: none;
    outline: none;
    background-color: var(--green-color);
    color: var(--bg-primary);
    font-size: 1.2rem;
    font-weight: 700;
    cursor: pointer;
    margin: 10px 0;
    box-shadow: var(--shadow-1);
  }

  .password-wrapper {
    display: inline-flex;
  }

  .eyeslash-icon {
    position: relative;
    top: -47px;
    font-size: 1.7rem;
    right: -286px;
    color: var(--shadow-3);
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 10vh;
  background-color: var(--bg-third);
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--color-secondary);
  }
`;
