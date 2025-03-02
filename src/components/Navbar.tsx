import React, { useState } from 'react';
import styled from 'styled-components';
import { Burger } from './Burger';
import "../styles/Navbar.css";
import { GiCrossedAxes } from "react-icons/gi";
export const Navbar = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  // Función para alternar el estado de "clicked"
  const handleclick = () => {
    setClicked(!clicked);
  };

  // Función para cerrar el menú (poniendo clicked a false)
  const closeMenu = () => {
    setClicked(false);
  };

  return (
    <NavContainer>
      <h2 className='DotDagerNav'>
        <span className='flecha'>&lt;</span> DOT DAGER <span className='flecha'>&gt;</span>
      </h2>
      <div className={`links ${clicked ? 'active' : ''}`}>
        {/* Los enlaces ahora llaman a closeMenu para cerrarlo */}
        <a className='linkN' onClick={closeMenu} href="#home">Home</a>
        <a className="linkN" onClick={closeMenu} href="#about">About</a>
        <a className="linkN" onClick={closeMenu} href="#contact">Contact</a>
        <a className='linkN' onClick={closeMenu} href="#lj"><GiCrossedAxes /></a>
      </div>
      <div className="burger">
        <Burger clicked={clicked} handleClick={handleclick} />
      </div>
      <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  border-bottom: 3px solid #67175a ;
  padding: 1.5rem;
  background: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: white;
    font-weight: 400;
    z-index: 99;

    span {
      font-weight: bold;
      z-index: 99;
    }
  }

  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }

  .burger {
    z-index: 100;
    @media (min-width: 768px) {
      display: none;
    }
  }

  .links {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;

    a {
      color: white;
      font-size: 1rem;
      margin-right: 6rem;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: -700px;
      left: -2000px;
      opacity: 0;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      transition: opacity 0.5s ease-in-out 0.3s;
      z-index: 99;

      a {
        font-size: 2rem;
        display: block;
        margin-top: 1rem;
        z-index: 99;
      }
    }
  }

  .links.active {
    opacity: 1;
    position: absolute;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;

    a {
      font-size: 2rem;
      margin-top: 1rem;
    }
  }
`;

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  left: -1000px;
  top: -1000px;
  width: 0%;
  height: 0%;
  z-index: 90;
  transition: all 0.5s ease-in-out;

  &.active {
    border-radius: 0 0 60% 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;
