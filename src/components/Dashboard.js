import React, { useRef, useState, useEffect } from "react";
import { Button, Row } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import firebase, { auth } from "../firebase";

export default function Dashboard() {

    const globalRef = firebase.database().ref().child("Global");
    const institucionRef = globalRef.child("institucion");
    institucionRef.on("value", (snapshot) => {
        const obj = snapshot.val()
    })

    return (
        <FlexWrap>


            <Card>

                <BlueDiv>
                    <H2>Administrar instituciones</H2>
                </BlueDiv>

                <FlexContainer>

                    <H4>Ingrese la información de la Institución</H4>

                    <LinkReact>Si deseas solicitar una cuenta da click aquí!</LinkReact>

                    <RowR>
                        <Ul>
                            <Li>
                                <H5>Farmacias guadalajara</H5>
                            </Li>
                            <Li>
                                <p style={{ fontFamily: "Lato", fontSize: "18px" }}>Users: 78</p>
                            </Li>
                            <Li>
                                <p style={{ fontFamily: "Lato", fontSize: "18px" }}>Videos: 8</p>
                            </Li>
                            <Li>
                                <Status>-Active-</Status>
                            </Li>

                        </Ul>

                    </RowR>
                    <RowR>
                        <Ul>
                            <Li>
                                <H5>Guardia nacional</H5>
                            </Li>
                            <Li>
                                <p style={{ fontFamily: "Lato", fontSize: "18px" }}>Users: 14</p>
                            </Li>
                            <Li>
                                <p style={{ fontFamily: "Lato", fontSize: "18px" }}>Videos: 19</p>
                            </Li>
                            <Li>
                                <StatusRed>-Active-</StatusRed>
                            </Li>

                        </Ul>

                    </RowR>
                    <RowR>
                        <Ul>
                            <Li>
                                <H5>Walmart</H5>
                            </Li>
                            <Li>
                                <p style={{ fontFamily: "Lato", fontSize: "18px" }}>Users: 28</p>
                            </Li>
                            <Li>
                                <p style={{ fontFamily: "Lato", fontSize: "18px" }}>Videos: 6</p>
                            </Li>
                            <Li>
                                <Status>-Active-</Status>
                            </Li>

                        </Ul>
                    </RowR>
                    <RowR>
                        <Ul>
                            <Li>
                                <H5>Subire</H5>
                            </Li>
                            <Li>
                                <p style={{ fontFamily: "Lato", fontSize: "18px" }}>Users: 34</p>
                            </Li>
                            <Li>
                                <p style={{ fontFamily: "Lato", fontSize: "18px" }}>Videos: 13</p>
                            </Li>
                            <Li>
                                <StatusRed>-Active-</StatusRed>
                            </Li>

                        </Ul>
                    </RowR>
                    <RowR>
                        <Ul>
                            <Li>
                                <H5>Tec de Monterrey</H5>
                            </Li>
                            <Li>
                                <p style={{ fontFamily: "Lato", fontSize: "18px" }}>Users: 7</p>
                            </Li>
                            <Li>
                                <p style={{ fontFamily: "Lato", fontSize: "18px" }}>Videos: 4</p>
                            </Li>
                            <Li>
                                <StatusRed>-Active-</StatusRed>
                            </Li>

                        </Ul>
                    </RowR>


                </FlexContainer>

            </Card>

        </FlexWrap>

    )
}



const ButtonReact = styled(Button)`
  text-decoration: none;
  position: relative;
  border: 2px solid black;
  border-radius: 8px;
  background-color: white;
  color: black;
  padding: 14px 28px;
  font-size: 20px;
  cursor: pointer;
  border-color: #005092;
  color: #005092;
  :hover {
      background: #005092;
      color: white;
  }
`;

const Status = styled(Button)`
  font-family: consolas;
  text-decoration: none;
  position: relative;
  border: 2px solid black;
  border-radius: 8px;
  background-color: green;
  color: white;
  font-size: 20px;
  cursor: pointer;
  border-color: black;
  height: 40px;
  margin-top: 10px;
`;

const StatusRed = styled(Button)`
  font-family: consolas;
  text-decoration: none;
  position: relative;
  border: 2px solid black;
  border-radius: 8px;
  background-color: #d00;
  color: white;
  font-size: 20px;
  cursor: pointer;
  border-color: black;
  height: 40px;
  margin-top: 10px;
`;

const Alert = styled.div`
    padding: 20px;
    background-color: #f44336;
    color: white;
`;


const H2 = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  width: 100%;
  font-family: Lato;
  color: white;
`;

const Label = styled.label`
  font-size: 14px;
  text-align: center;
  margin-bottom: 3px;
  width: 100%;
  font-family: Lato;
`;

const H4 = styled.h4`
  color: #6c757d;
  text-align: center;
  margin-bottom: 2px;
  width: 100%;
  font-family: Lato;
  font-size: 16px;
  margin-bottom: 12px;
`;

const H5 = styled.h5`
  color: #005092;
  text-align: center;
  font-family: Lato;
  font-size: 16px;
  
`

const Card = styled.div`
  width: 80vw;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  height: 70vh;
`;

const FlexWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`;

const FlexContainer = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
`;

const Form = styled.form`
    width: 80%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
`;

const BlueDiv = styled.div`
  background-color: #005092;
  padding: 4px;
  height: 50px;
  border-radius: 8px 8px 0px 0px;
`;

const Container = styled.div`
  padding: 2px 16px;
  width: 100%;
  text-align: start;
  height: 100px;
`;

const Input = styled.input`
  background-color: #eee;
  border-radius: 4px;
  border: none;
  padding: 12px 5px;
  margin: 4px 0;
  width: 100%;
  font-size: 20px;
`;

const LinkReact = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: #005092;
`;

const RowR = styled(Card)`
    text-align: center;
    
    margin-top: 15px;
    width: 90%;
    height: auto;
    box-shadow: 4px 4px 8px 4px rgba(0,0,0,0.4);
    
`

const Ul = styled.div`
    display: grid;
    grid-template-columns: 30% repeat(3, auto);
    text-align: center;
    margin: 0px;
`
const Li = styled.div`
    margin: 0px 100px;
    text-align: center;
`