import React, { useRef, useState, useEffect } from "react";
import { Button } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import firebase, { auth } from "../firebase";

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [loading, setLoading] = useState(false)
    const { login } = useAuth();
    const [error, setError] = useState("");
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault()

    }

    async function handleLogin(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push("/");
            console.log("logged in")
        } catch (er) {
            setError("Error al iniciar sesión: " + er);
        }

        setLoading(false);
    }

    return (

        <FlexWrap>

            <Card>

                <BlueDiv>
                    <H2>Crear una cuenta</H2>
                </BlueDiv>

                <FlexContainer>

                    <H4>Ingrese sus datos para crear la cuenta</H4>

                    <LinkReact to='/login'>Si deseas iniciar sesión da click aquí!</LinkReact>

                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleLogin}>

                        <Container id="email">
                            <Label>Dirección de correo electrónico</Label>
                            <Input
                                type="email"
                                ref={emailRef}
                                placeholder="ejemplo@axios.com"
                                required
                            />
                        </Container>

                        <Container id="password">
                            <Label>Contraseña</Label>
                            <Input
                                minLength="8"
                                type="password"
                                ref={passwordRef}
                                placeholder="Al menos 8 dígitos"
                            />
                        </Container>

                        <Container>
                            <Label>Id de la institución</Label>
                            <Input
                                minLength="8"
                                type="text"
                                ref={passwordRef}
                                placeholder="Proporcionado por tu empleador"
                            />
                        </Container>

                        <ButtonReact style={{ marginBottom: '10px' }}
                            disabled={loading} type="submit"
                        >
                            Crear cuenta
                        </ButtonReact>
                    </Form>
                </FlexContainer>

            </Card>

        </FlexWrap>


    )
}

const FlexWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`;

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