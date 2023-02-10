import React from 'react';
import { FaFacebookF,FaTwitch,FaTwitter,FaWhatsapp,FaInstagram } from "react-icons/fa";
import styled from 'styled-components';


const Footer = () => {
  return <Container>
        <Menu>
            <MenuItem>
                <FaFacebookF />
            </MenuItem>
            <MenuItem>
                <FaTwitch />
            </MenuItem>
            <MenuItem>
                <FaTwitter/>
            </MenuItem>
            <MenuItem>
                <FaWhatsapp/>
            </MenuItem>
            <MenuItem>
                <FaInstagram/>
            </MenuItem>
        </Menu>
        <TitleFoot>© 2022, hecho con 💗 por VittoSolution.</TitleFoot>
        <TitleFoot>
            <img src={"https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"} alt="logo" />
        </TitleFoot>
    </Container>
}

export default Footer;

export const Container = styled.footer`
    background: #22272e;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: auto;
`;
export const Menu = styled.ul`
    padding: 10px;
    margin:10px;
    display:flex;
    justify-content: center;
    list-style: none;
`;
export const MenuItem = styled.li`    
    display:flex;
    justify-content: center;
    align-items:center;
    color: #FAFAFA;
    padding: 0.5rem 2.5rem;
    cursor: pointer;
    transition: 0.5s all ease;
svg{
    margin:10px;
    font-size: 1.5rem;
}
&:hover{
    color:#E0792A;
    transition: 0.5s all ease;
}
@media screen and (max-width: 960px){
    padding: 5px;
    margin: 5px;
}
`;

export const TitleFoot = styled.h2`
    padding: 10px;
    margin: 10px;
    text-align: center;
    color: #FAFAFA;
    font-size: 12px;
    font-style: italic;
    font-weight: 200;

    img{
        width: 40%;
        
    }
`;