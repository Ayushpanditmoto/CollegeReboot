import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch, FaHome } from "react-icons/fa";

function Headers() {
  return (
    <>
      <HeaderContainer>
        <HeaderLeft>
          <Link to="/" className="header_logo">
            <div className="circle">
              <div className="title">LOGO</div>
            </div>
          </Link>
          <div className="header_search">
            <FaSearch color="blue" />
            <input type="text" placeholder="Search" />
          </div>
        </HeaderLeft>
        <HeaderCenter className="centerrow">
          <div className="middle_icon active hover1">
            <Link to="/">
              <FaHome color="var(--blue-color)" />
            </Link>
          </div>
          <div className="middle_icon">
            <Link to="/">
              <FaHome />
            </Link>
          </div>
          <div className="middle_icon">
            <Link to="/">
              <FaHome />
              <div className="middle_notification">9+</div>
            </Link>
          </div>
          <div className="middle_icon">
            <Link to="/">
              <FaHome />
            </Link>
          </div>
          <div className="middle_icon">
            <Link to="/">
              <FaHome />
            </Link>
          </div>
        </HeaderCenter>
        <HeaderRight>
          <Link to="/">Home</Link>
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

const HeaderRight = styled.div``;
