import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineClose, AiOutlineInfoCircle } from 'react-icons/ai';
import { Formik, Form } from 'formik';
import RegisterInput from './RegisterInput';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const RegisterValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('What is your First name?'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('What is your Last name?'),
  email: Yup.string()
    .email('Invalid Email Address')
    .required(
      'You will need this when you log in and if you forget your password'
    ),
  password: Yup.string()
    .min(8, 'Password is Too Short!')
    .max(50, 'Password is Too Long!')
    .required('Password is required'),
  branch: Yup.string().required('Branch is required'),
  bYear: Yup.string().required('Year is required'),
  bMonth: Yup.string().required('Month is required'),
  bDay: Yup.string().required('Day is required'),
});

function Signup() {
  const UserInfo = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    branch: '',
    gender: '',
    bYear: new Date().getFullYear(),
    bMonth: new Date().getMonth() + 1,
    bDay: new Date().getDate(),
  };
  const [register, setRegister] = useState(UserInfo);
  const [dateError, setDateError] = useState('');
  const [genderError, setGenderError] = useState('');
  const [branchError, setBranchError] = useState('');

  const {
    firstName,
    lastName,
    email,
    password,
    branch,
    gender,
    bYear,
    bMonth,
    bDay,
  } = register;

  const Year = Array.from(
    new Array(108),
    (val, index) => new Date().getFullYear() - index
  );
  // console.log(Year);

  const MonthMap = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec',
  };

  const Month = Array.from(new Array(12), (val, index) => index + 1);

  const getDaysInMonth = () => {
    return new Date(bYear, bMonth, 0).getDate();
  };

  const Day = Array.from(
    new Array(getDaysInMonth()),
    (val, index) => index + 1
  );

  // console.log(Day);

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    // console.log(`${[name]}: ${value}`);
    setRegister({
      ...register,
      [name]: value,
    });
  };
  console.log(register);
  return (
    <Registeration>
      <div className='register'>
        <div className='register_header'>
          <Link to='/'>
            <AiOutlineClose />
          </Link>
          <span>Sign Up </span>
          <span>it's quick and easy</span>
        </div>
        <Formik
          enableReinitialize
          initialValues={{
            firstName,
            lastName,
            email,
            password,
            branch,
            gender,
            bYear,
            bMonth,
            bDay,
          }}
          validationSchema={RegisterValidationSchema}
          onSubmit={() => {}}
        >
          {(formik) => (
            <Form className='register_form'>
              <div className='reg_line'>
                <RegisterInput
                  name='firstName'
                  placeholder='First Name'
                  onChange={handleRegisterChange}
                />
              </div>
              <div className='reg_line'>
                <RegisterInput
                  name='lastName'
                  placeholder='Surname Name'
                  onChange={handleRegisterChange}
                />
              </div>
              <div className='reg_line'>
                <RegisterInput
                  name='email'
                  placeholder='Email'
                  onChange={handleRegisterChange}
                />
              </div>
              <div className='reg_line'>
                <RegisterInput
                  name='password'
                  placeholder='Enter New Password'
                  onChange={handleRegisterChange}
                />
              </div>
              {/* <div className='reg_line'>
                  <RegisterInput
                    name='confirmPassword'
                    placeholder='Confirm Password'
                    onChange={handleRegisterChange}
                  />
                </div> */}
              <div className='reg_line'>
                <div className='reg_line_header'>Branch</div>
                <select
                  name='branch'
                  id='branch'
                  value={branch}
                  onChange={handleRegisterChange}
                >
                  <option value='CSE'>CSE</option>
                  <option value='IT'>IT</option>
                  <option value='MECH'>MECH</option>
                  <option value='CIVIL'>CIVIL</option>
                  <option value='ECE'>ECE</option>
                </select>
              </div>
              {branchError && <MessageError>{branchError}</MessageError>}
              <div className='reg_col'>
                <div className='reg_line_header'>
                  Date of Birth <AiOutlineInfoCircle />
                </div>
                <div className='reg_grid'>
                  <select
                    name='bDay'
                    id='bDay'
                    value={bDay}
                    onChange={handleRegisterChange}
                  >
                    {Day.map((day, i) => (
                      <option key={i} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                  <select
                    name='bMonth'
                    id='bMonth'
                    value={bMonth}
                    onChange={handleRegisterChange}
                  >
                    {Month.map((month, i) => (
                      <option key={i} value={month}>
                        {MonthMap[month]}
                      </option>
                    ))}
                  </select>
                  <select
                    name='bYear'
                    id='bYear'
                    value={bYear}
                    onChange={handleRegisterChange}
                  >
                    {Year.map((year, i) => (
                      <option key={i} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {dateError && <MessageError>{dateError}</MessageError>}
              <div className='reg_col'>
                <div className='reg_line_header'>
                  Gender <AiOutlineInfoCircle />
                </div>
                <div className='reg_grid'>
                  <label htmlFor='male'>
                    Male
                    <input
                      type='radio'
                      name='gender'
                      id='male'
                      value='male'
                      onChange={handleRegisterChange}
                    />
                  </label>
                  <label htmlFor='female'>
                    Female
                    <input
                      type='radio'
                      name='gender'
                      id='female'
                      value='female'
                      onChange={handleRegisterChange}
                    />
                  </label>
                  <label htmlFor='other'>
                    Other
                    <input
                      type='radio'
                      name='gender'
                      id='other'
                      value='other'
                      onChange={handleRegisterChange}
                    />
                  </label>
                </div>
              </div>
              {genderError && <MessageError>{genderError}</MessageError>}
              <div className='reg_info'>
                By clicking Sign Up, you agree to our{' '}
                <span>Terms, Data Policy &nbsp;</span> and
                <span> Cookie Policy.</span> You may receive SMS Notifications
                from us and can opt out any time.
              </div>
              <button type='submit' onSubmit={formik.handleSubmit}>
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Registeration>
  );
}

export default Signup;

const MessageError = styled.div`
  color: white;
  width: 100%;
  text-align: center;
  background-color: #c63b2c;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 1px 2px var(--shadow-1);
`;

const Registeration = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 50px 0;
  .register {
    background: var(--bg-primary);
    box-shadow: 0 1px 2px var(--shadow-1);
    border-radius: 5px;
    padding: 15px;
    padding-bottom: 1rem;
    width: 350px;
    height: fit-content;
    color: var(--color-primary);
    .register_header {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid var(--bg-third);
      svg {
        position: absolute;
        right: 0;
        cursor: pointer;
      }
      span:first-of-type {
        font-size: 1.3rem;
        font-weight: 700;
      }
      span:last-of-type {
        font-size: 0.9rem;
      }
    }
    .register_form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 7px;
      button {
        width: 300px;
        border-radius: 4px;
        background-color: var(--blue-color);
      }
      .reg_info {
        font-size: 0.9rem;
        margin: 10px;
        color: var(--color-secondary);
        span {
          color: var(--blue-color);
          cursor: pointer;
        }
      }
      .reg_line {
        display: flex;
        width: 100%;
        flex-direction: column;
        .reg_line_header {
          display: flex;
          align-items: center;
          gap: 2px;
          font-size: 0.9rem;
          color: var(--color-secondary);
        }
        select {
          width: 100%;
          height: 40px;
          font-weight: 600;
          border: 1px solid var(--bg-third);
          border-radius: 5px;
          padding: 0 5px;
          font-size: 1rem;
          cursor: pointer;
          color: var(--color-primary);
          background: var(--bg-secondary);
          &:focus {
            outline: none;
          }
        }
      }
      .reg_col {
        position: relative;
        align-self: flex-start;
        margin-top: 10px;
        padding: 0 10px;
        .reg_line_header {
          display: flex;
          align-items: center;
          gap: 2px;
          font-size: 0.9rem;
          color: var(--color-secondary);
        }
        .reg_grid label {
          width: 90px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-primary);
          border-radius: 5px;
          cursor: pointer;
          border: 1px solid var(--color-secondary);
          padding: 0 10px;
        }
        .reg_grid {
          margin-top: 5px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          height: 30px;
          width: 100%;
          select {
            width: 90px;
            height: 100%;
            font-weight: 600;
            border: 1px solid var(--bg-third);
            border-radius: 5px;
            padding: 0 5px;
            font-size: 0.9rem;
            cursor: pointer;
            color: var(--color-primary);
            background: var(--bg-secondary);
            &:focus {
              outline: none;
            }
          }
        }
      }
    }
  }
`;
