import React, { useRef, useState, useEffect } from "react";
import { Button } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import firebase, { auth } from "../firebase";

export default function Institucion() {

    const empresaRef = useRef()
    const directionRef = useRef()
    const emailRef = useRef()
    const telRef = useRef()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()

        try {
            let empresa = empresaRef.current.value;
            let direction = directionRef.current.value;
            let email = emailRef.current.value;
            let tel = telRef.current.value;
            let code = ConvertStringToHex(empresa);

            writeData(empresa, direction, email, tel, code);
            history.push("/");
        } catch (er) {
            setError("Error al crear la institución");
            console.log(er);
        }

        setLoading(false);
    }

    function ConvertStringToHex(str) {
        var arr = [];
        for (var i = 0; i < str.length; i++) {
            arr[i] = (str.charCodeAt(i).toString(16)).slice(-4);
        }
        return arr.toString();
    }

    function writeData(empresa, direction, email, tel, code) {
        //Promise
        firebase
            .database()
            .ref("Global/institucion/" + empresa)
            .set({
                empresa: empresa,
                direction: direction,
                email: email,
                tel: tel,
                code: code
            });
        //updateName(name)
    }

    return (

        <FlexWrap>


            <Card>

                <BlueDiv>
                    <H2>Nueva Institución</H2>
                </BlueDiv>

                <FlexContainer>

                    <H4>Ingrese la información de la Institución</H4>

                    <LinkReact>Si deseas solicitar una cuenta da click aquí!</LinkReact>

                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>

                        <Container id="empresa">
                            <Label>Institución</Label>
                            <Input
                                type="text"
                                ref={empresaRef}
                                placeholder=""
                            />
                        </Container>

                        <Container id="direction">
                            <Label>Dirección física de la empresa</Label>
                            <Input
                                type="text"
                                ref={directionRef}
                                placeholder=""
                            />
                        </Container>

                        <Container id="email">
                            <Label>Correo electrónico de la empresa</Label>
                            <Input
                                type="email"
                                ref={emailRef}
                                placeholder=""
                                required
                            />
                        </Container>

                        <Container id="tel">
                            <Label>Teléfono de la empresa</Label>
                            <Input
                                type="tel"
                                ref={telRef}
                                pattern="[0-9]{10}"
                                placeholder=""
                            />
                        </Container>

                        <ButtonReact style={{ marginBottom: '10px' }}
                            disabled={loading} type="submit"
                        >
                            Dar de alta
                        </ButtonReact>
                    </Form>
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

const Card = styled.div`
  max-width: 750px;
  min-width: 360px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  height: 50%;
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
  padding: 5px;
  height: 80px;
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