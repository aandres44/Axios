import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import firebase, { auth } from "../firebase";

export default function Profile() {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const user = firebase.database().ref("Global/users/" + currentUser.uid);
    const history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [institucion, setInstitucion] = useState("");

    useEffect(() => {
        if (currentUser != null) {
            user.on("value", (snapshot) => {
                const data = snapshot.val();
                setName(data["name"]);
                setEmail(data["email"]);
                setPhone(data["phone"]);
                console.log(data);
            });
        }
    }, [name, phone, email]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    async function handleLogut() {
        setError("");

        try {
            await logout();
            history.push("/signup");
            window.location.reload();
        } catch {
            setError("No se pudo cerrar la sesión");
        }
    }

    return (
        <FlexWrap>

            <Card>
                <BlueDiv>
                    <H2>Perfil</H2>
                </BlueDiv>

                {error && <Alert>{error}</Alert>}

                <GridDiv>
                    <Center>
                        <H4>Nombre:</H4>
                        <p>{name}</p>
                    </Center>
                    <Center>
                        <H4>Email:</H4>
                        <p>{email}</p>
                    </Center>
                    <Center>
                        <H4>Institución</H4>
                        <p>{institucion}</p>
                    </Center>

                </GridDiv>

                <Container>
                    <LinkButton to="/update-profile" renderAs={Link}>
                        Actualizar perfil
                    </LinkButton>
                </Container>
                <Container>
                    <ButtonText onClick={handleLogut}>Cerrar sesión</ButtonText>
                </Container>
            </Card>

        </FlexWrap>
    );
}

const FlexWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
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

const H4 = styled.h4`
  color: #6c757d;
  font-family: Lato;
  font-size: 16px;
`;

const Card = styled.div`
  max-width: 750px;
  min-width: 360px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  height: auto;
`;

const BlueDiv = styled.div`
  background-color: #005092;
  padding: 5px;
  height: 80px;
  border-radius: 8px 8px 0px 0px;
`;

const Center = styled.div`
  display: grid;
  grid-template-columns: 50% auto;
  width: 90%;
  text-align: left;
  margin-top: 2px;
  padding-left: 9%;
`;

const Container = styled.div`
  width: 100%;
  text-align: center;
  height: 50px;
`;

const LinkButton = styled(Link)`
  text-decoration: none;
  position: relative;
  border: 2px solid black;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
  border-color: #005092;
  color: #005092;
  padding: 3px 3px 3px 3px;
  margin-top: 50px;
  :hover {
    background: #005092;
    color: white;
  }
`;

const ButtonText = styled.button`
  text-decoration: none;
  color: #005092;
  border: none;
  border-radius: 8px;
  background-color: inherit;
  padding: 0px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  :hover {
    color: red;
  }
  font-size: 24px;
`;

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 100%;
  align-items: center;
`;