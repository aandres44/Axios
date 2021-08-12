import React, { useRef, useState, useEffect } from "react";
import logo from "../logo.jpeg";
import { Link, useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import ReactPlayer from "react-player";


export default function Videos() {
    return (
        <div className="flex-center home-container">

    
    
          <div className="fit-center">
          <div>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=RK1K2bCg4J8'
          className='react-player'
          playing={true}
          width={400}
          height={350}
          sound={.5}

        />
      </div>
    
    
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
  