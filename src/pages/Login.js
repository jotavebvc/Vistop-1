import { React, useState } from 'react';
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

    const goToHomeAdm = () => {
        navigate("/home-adm", { replace: true })
    }
    // const goToHomeOperador = () => {
    //     navigate("/home-operador", { replace: true })
    // }

    const handleFormSubmit = async (event) => {
        const loginPayload = await JSON.stringify({
            username: "jotavemonte",
            password: "jvmrt123"
        })
        console.log(loginPayload)
        const response = await fetch(
            "http://localhost:8000/login/",
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
            const token = response.body.token
            localStorage.setItem('token', token)
        }

        // if (response.status >= 400) {
        //     setMensagemDeErro(await response.json().error)
        //     return
        // }
        // navigate("/home-operador", { replace: true })
    }

    handleFormSubmit(null)

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
                        {/* <Button className='btn-grad'
                            variant="outlined"
                            onClick={goToHomeAdm}
                        >
                            {mensagemDeErro || "ENTRAR"}            1
                        </Button>
                        <Button className='btn-grad1'
                            variant="outli  ned"
                            onClick={goToHomeOperador}
                        >
                            {mensagemDeErro || "ENTRAR"}
                        </Button> */}
                    </div>
                </div>
            </div>
        </Container>
        {/* <Footer /> */}
        </div>

    )
}


export default Login;
