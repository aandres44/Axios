import React, { useRef, useState } from "react"
import { Button } from "react-bootstrap"
import styled from "@emotion/styled";

export default function Login() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (

        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "100px"
            }}
        >


            <Card>

                <BlueDiv>
                    <H2>Ingrese sus datos para iniciar sesion</H2>
                </BlueDiv>

                <FlexContainer>

                    <H4>Edita los datos que deseas modificar.</H4>

                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>

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
                                placeholder="debe tener al menos 8 digitos"
                            />
                        </Container>

                        <ButtonReact style={{ marginBottom: '10px' }} 
                            disabled={loading} type="submit"
                        >
                            Actualizar perfil
                        </ButtonReact>
                    </Form>
                </FlexContainer>

            </Card>

        </div>


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
  border-color: #2196F3;
  color: dodgerblue;
  :hover {
      background: #2196F3;
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
  background-color: #2196F3;
  padding: 10px;
  height: 100px;
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