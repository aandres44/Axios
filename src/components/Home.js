import React from 'react'
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          marginTop: "100px",
          textAlign: "center",
          marginBottom: "30px",
          width: "100%",
          fontFamily: "Lato",
          fontSize: "40px",
        }}
      >
        AXIOS
      </h1>
      <h3
        style={{
          fontFamily: "Lato",
          marginBottom: "35px",
          textAlign: "center",
          paddingLeft: "50px",
          paddingRight: "50px",
          width: "100%",
        }}
      >
        El mejor lugar para aprender
      </h3>

      <Link to="/login">
        <Butt>Iniciar sesión</Butt>
      </Link>
    </div>
  );
};

const Butt = styled.button`
  border: 1px solid #2196F3;
  border-radius: 15px;
  background: none;
  padding: 8px 8px;
  font-family: monospace;
  cursor: pointer;
  color: #2196F3;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  margin-top: 40px;
  font-family: Lato;
  &:hover {
    color: white;
    background: #2196F3;
  }
  ::before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 0%;
    background: #2196F3;
    z-index: -1;
    transition: 0.8s;
    top: 0;
    border-radius: 0 0 50% 50%;
  }
  &:hover::before {
    height: 180%;
  }
`;
