import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Headers() {
  return (
    <>
      <HeaderContainer>
        <HeaderLeft>
          <Link to='/' className='header_logo'>
            <div className='circle'>
              <h1>College Reboot</h1>
            </div>
          </Link>
        </HeaderLeft>
        <HeaderCenter>
          <Link to='/'>Home</Link>
        </HeaderCenter>
        <HeaderRight>
          <Link to='/'>Home</Link>
        </HeaderRight>
      </HeaderContainer>
    </>
  );
}

export default Headers;

const HeaderContainer = styled.div`
  height: 10vh;
`;

const HeaderLeft = styled.div``;

const HeaderCenter = styled.div``;

const HeaderRight = styled.div``;
