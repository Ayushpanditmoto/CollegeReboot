import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaUserFriends,
  FaHome,
  FaFacebookMessenger,
} from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiFillVideoCamera, AiFillGithub } from "react-icons/ai";
import { BsFillFileEarmarkSpreadsheetFill } from "react-icons/bs";

import SearchMenu from "./SearchMenu";
function Headers() {
  const [show, setShow] = useState(false);
  return (
    <>
      <HeaderContainer>
        <HeaderLeft>
          <Link to="/" className="header_logo">
            <div className="circle">
              <div className="title">LOGO</div>
            </div>
          </Link>
          <div
            className="header_search"
            onClick={() => {
              setShow(!show);
            }}
          >
            <FaSearch color="blue" />
            <input type="text" placeholder="Search" />
          </div>
        </HeaderLeft>
        {show && <SearchMenu setShow={setShow} />}
        <HeaderCenter className="centerrow">
          <div className="middle_icon active hover1">
            <Link to="/">
              <FaHome color="var(--blue-color)" />
            </Link>
          </div>
          <div className="middle_icon">
            <Link to="/">
              <FaUserFriends />
            </Link>
          </div>
          <div className="middle_icon">
            <Link to="/">
              <AiFillVideoCamera />
              <div className="middle_notification">9+</div>
            </Link>
          </div>
          <div className="middle_icon">
            <Link to="/">
              <BsFillFileEarmarkSpreadsheetFill />
            </Link>
          </div>
          <div className="middle_icon">
            <Link to="/">
              <AiFillGithub />
            </Link>
          </div>
        </HeaderCenter>
        <HeaderRight className="centerrow">
          <Link to="/profile" className="profile_link hover1">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt=""
            />
            <span>Ayush</span>
          </Link>
          <div className="circle_icon hover1">
            <Link to="/">
              <CgMenuGridO />
            </Link>
          </div>
          <div className="circle_icon hover1">
            <Link to="/">
              <FaFacebookMessenger />
            </Link>
          </div>
          <div className="circle_icon hover1">
            <Link to="/">
              <IoNotificationsSharp />
            </Link>
            <div className="right_notification">
              <span>9+</span>
            </div>
          </div>
          <div className="circle_icon hover1">
            <Link to="/">
              <IoMdArrowDropdown />
            </Link>
          </div>
        </HeaderRight>
      </HeaderContainer>
    </>
  );
}

export default Headers;

const HeaderContainer = styled.div`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 99;
  background-color: var(--white-color);
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 0 2rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const HeaderLeft = styled.div`
  display: flex;
  .title {
    font-size: 2rem;
    font-weight: 900;
    color: var(--blue-color);
    letter-spacing: normal;
  }
  .header_search {
    display: flex;
    /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
    align-items: center;
    justify-content: center;
    background-color: var(--bg-forth);
    border-radius: 5px;
    padding: 0.5rem 1rem;
    margin: 0.5rem 1rem;
    input {
      border: none;
      background-color: transparent;
      outline: none;
      width: 200px;
      margin-left: 0.5rem;
      font-size: 1rem;
      color: var(--dark-gray-color);
      font-weight: 500;

      ::placeholder {
        color: var(--dark-gray-color);
        transform: translateY(-2px);
      }
    }
  }
`;

const HeaderCenter = styled.div`
  transform: translateY(4px);
  justify-content: space-evenly !important;
  .middle_icon {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    margin: 0.2rem 0rem;
    a {
      color: var(--dark-gray-color);
      font-size: 1.5rem;
    }
    .middle_notification {
      position: absolute;
      top: -5px;
      right: 0;
      background-color: var(--red-color);
      color: var(--white-color);
      font-size: 0.8rem;
      font-weight: 600;
      padding: 1px 5px;
      border-radius: 0.5rem;
    }
  }
`;

const HeaderRight = styled.div`
  position: absolute;
  right: 0;
  transform: translateY(4px);
  .profile_link {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    padding: 3px 10px 3px 5px;
    border-radius: 5px;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    margin-right: 10px;
    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
  }
  .circle_icon {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: var(--bg-forth);
    padding: 0.5rem 0.5rem;
    margin: 0.2rem 0.3rem;
    a {
      transform: translateY(2px);
      color: var(--dark-gray-color);
      font-size: 1.7rem;
    }
    :hover {
      background-color: var(--bg-third);
    }
  }
  .right_notification {
    position: absolute;
    top: -5px;
    right: 0;
    background-color: var(--red-color);
    color: var(--white-color);
    font-size: 0.8rem;
    font-weight: 600;
    padding: 1px 5px;
    border-radius: 0.5rem;
  }
`;
