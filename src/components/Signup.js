import React, { useRef, useState, useEffect } from "react";
import { Button } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import firebase, { auth } from "../firebase";

export default function Signup() {
    const nameRef = useRef()
    const emailRef = useRef()
    const idRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [loading, setLoading] = useState(false)
    const { signup } = useAuth();
    const [error, setError] = useState("");
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Las contraseñas no coinciden");
        }

        try {
            setError("");
            setLoading(true);

            let name = nameRef.current.value;
            let password = passwordRef.current.value;
            let email = emailRef.current.value;
            let id = idRef.current.value;

            await signup(email, password);

            writeUserData(name, email, id);

            history.push("/");
        } catch (er) {
            setError("Error al crear la cuenta: " + er);
        }

        setLoading(false);
    }

    function writeUserData(name, email, id) {
        //Promise
        firebase
            .database()
            .ref("Global/users/" + auth.currentUser.uid)
            .set({
                name: name,
                email: email,
                id: id,
            });
        //updateName(name)
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
                    <Form onSubmit={handleSubmit}>

                        <Container>
                            <Label>Nombre</Label>
                            <Input
                                type="name"
                                ref={nameRef}
                                placeholder="Nombre"
                                required
                            />

                        </Container>

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
                                required
                            />
                        </Container>

                        <Container id="password">
                            <Label>Contraseña</Label>
                            <Input
                                minLength="8"
                                type="password"
                                ref={passwordConfirmRef}
                                placeholder="Vuelve a escribir la contraseña"
                                required
                            />
                        </Container>

                        <Container>
                            <Label>Id de la institución</Label>
                            <Input
                                type="text"
                                ref={idRef}
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