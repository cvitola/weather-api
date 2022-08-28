import React from 'react';
import logo from './../img/api-logo.png';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
        <img src={logo} alt="img_logo" />
        <h1>Clima en vivo 2.0 🌤 </h1>
    </Container>
  )
}

export default Header;

export const Container = styled.header`
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    padding: 20px 20px;
    background: #22272e;
    color: #FAFAFA;
    img{
        height: 60px;
        width: 60px;
        box-shadow: 1px 1px 1px grey;
        border-radius: 50%;
    }

    h1{
        font-size: calc(22px + 1.5vw);
    }
`;
