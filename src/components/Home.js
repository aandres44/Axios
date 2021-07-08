import React from 'react'
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import "./Home.css";
import logo from "../logo.jpeg";

export default function Home() {
  return (
    <div className="flex-center home-container">
      <div className="flex-center">
        <img
          src={logo}
          alt="AXIOS"
          className="home-img"
        />
      </div>


      <div className="flex-center">
        <h2>Para iniciar sesión da click en el boton justo debajo</h2>




      </div>

      <div className="flex-center">
        <Link to="/login">
          <Butt>Iniciar sesión</Butt>
        </Link>

      </div>




    </div>
  );
};

const Butt = styled.button`
  font-size: 2em;
  border: 1px solid #005092;
  border-radius: 15px;
  background: none;
  padding: 8px 8px;
  font-family: monospace;
  cursor: pointer;
  color: #005092;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  margin-top: 40px;
  font-family: Lato;
  &:hover {
    color: white;
    background: #005092;
  }
  ::before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 0%;
    background: #005092;
    z-index: -1;
    transition: 0.8s;
    top: 0;
    border-radius: 0 0 50% 50%;
  }
  &:hover::before {
    height: 180%;
  }
`;
