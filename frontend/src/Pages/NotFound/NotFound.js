import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NotFound() {
  return (
    <NotFoundPage>
      <NotFoundHeader>
        <h1>Oops!!</h1>
        <h1>Page Not Found</h1>
        <Link to="/">
          <h2>
            We can't find the page you're looking for, Please kindly head back
            to the Home page
          </h2>
          <h3>
            <Link to="/">Click Here to go to Home</Link>
          </h3>
        </Link>
      </NotFoundHeader>
    </NotFoundPage>
  );
}

export default NotFound;

const NotFoundPage = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow-y: hidden;
`;

const NotFoundHeader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 10rem auto;

  h1 {
    font-size: 2rem;
    font-weight: 900;
    color: #0088ff;
    margin: 3px auto;
  }
  h2 {
    font-size: 1.2rem;
    font-weight: 400;
    text-align: center;
    margin-top: 30px;
  }
  h3 {
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    margin-top: 30px;
  }
  h3:hover {
    text-decoration: underline;
    color: #0088ff;
  }
`;
