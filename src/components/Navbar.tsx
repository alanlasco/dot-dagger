import React, { useState } from 'react';
import styled from 'styled-components';
import { Burger } from './Burger';

export const Navbar = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  const handleclick = () => {
    setClicked(!clicked);
  };

  return (
    <NavContainer>
      <h2>
        Navbar <span>prueba</span>
      </h2>
      <div className={`links ${clicked ? 'active' : ''}`}>
        <a onClick={handleclick} href="/">Home</a>
        <a onClick={handleclick} href="/about">About</a>
        <a onClick={handleclick} href="/contact">Contact</a>
      </div>
      <div className="burger">
        <Burger clicked={clicked} handleClick={handleclick} />
      </div>
      <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  padding: 0.4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: white;
    font-weight: 400;

    span {
      font-weight: bold;
    }
  }

  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }

  .burger {
    @media (min-width: 768px) {
      display: none;
    }
  }

  .links {
    display: flex; /* En pantallas grandes, los enlaces estarán en fila */
    align-items: center;
    margin-left: auto;
    margin-right: auto;

    a {
      color: white;
      font-size: 1rem;
      margin-right: 1rem;
    }

    /* Estilos para el menú en pantallas pequeñas */
    @media (max-width: 768px) {
      display: flex; /* Usamos flexbox también para el menú hamburguesa */
      flex-direction: column; /* Los enlaces se apilan en columna */
      position: absolute;
      top: -700px;
      left: -2000px;
      opacity: 0;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      transition: opacity 0.5s ease-in-out 0.3s;

      a {
        font-size: 2rem;
        display: block;
        margin-top: 1rem;
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
  z-index: -1;
  transition: all 0.5s ease-in-out;

  &.active {
    border-radius: 0 0 60% 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;