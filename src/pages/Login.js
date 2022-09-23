import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Button, TextField, Container } from '@mui/material';
import 'Scss/Login.scss';


const Login = (props) => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [mensagemDeErro, setMensagemDeErro] = useState("")
    const navigate = useNavigate()

    const handleLoginInput = (event) => {
        setLogin(event.target.value)
    }

    const handlePasswordInput = (event) => {
        setPassword(event.target.value)
    }

    const goToHomeOperador = () => {
        navigate("/home-operador", { replace: true })
    }

    const handleFormSubmit = async (event) => {
        const loginPayload = await JSON.stringify({
            username: login,
            password: password
        })
        console.log(loginPayload)
        const response = await fetch(
            "https://vistapp-backend.herokuapp.com/login/",
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: loginPayload
            }
        )
        if (response.ok) {
            const body = await response.json()
            localStorage.setItem('token', body.token)
            goToHomeOperador()
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            goToHomeOperador()
        }
    })

    return (
        <div className='degrade-context'>
        <Container className='card-test'>
         <div>
                <div variant="outlined">
                    <div className="login-form">
                        <span className='loginfont'>LOGIN</span>
                        <TextField
                            className='outlined-login-input'
                            id="outlined-login-input"
                            label="Usuário"
                            onChange={handleLoginInput}
                        />
                        <TextField
                            className='outlined-password-input'
                            id="outlined-password-input"
                            label="Senha"
                            type="password"
                            autoComplete="current-password"
                            onChange={handlePasswordInput}
                        />
                        <Button className='btn-grad'
                            variant="outlined"
                            onClick={handleFormSubmit}
                        >
                            {mensagemDeErro || "ENTRAR"}
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
        {/* <Footer /> */}
        </div>

    )
}


export default Login;
