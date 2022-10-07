import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Container } from "@mui/material";
import Cookies from "js-cookie";
import "Scss/Login.scss";
import { serverUrl } from '../settings'


const url = `${serverUrl}/login/`

const Login = props => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginInput = event => {
    setLogin(event.target.value);
  };

  const handlePasswordInput = event => {
    setPassword(event.target.value);
  };

  const goToHomeAdm = () => {
    navigate("/home-adm", { replace: true });
  };

  const handleFormSubmit = async event => {
    const loginPayload = await JSON.stringify({
      username: login,
      password: password
    });
    const response = await fetch(
      url,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: loginPayload
      }
    );
    if (response.ok) {
      goToHomeAdm();
    }
  };

  useEffect(() => {
    const loggedIn = Cookies.get("sessionid");
    if (loggedIn) {
      goToHomeAdm();
    }
  });

  return (
    <div className="degrade-context">
      <Container className="card-test">
        <div>
          <div variant="outlined">
            <div className="login-form">
              <span className="loginfont">LOGIN</span>
              <TextField
                className="outlined-login-input"
                id="outlined-login-input"
                label="Usuário"
                onChange={handleLoginInput}
              />
              <TextField
                className="outlined-password-input"
                id="outlined-password-input"
                label="Senha"
                type="password"
                autoComplete="current-password"
                onChange={handlePasswordInput}
              />
              <Button
                className="btn-grad"
                variant="outlined"
                onClick={handleFormSubmit}
              >
                ENTRAR
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
