import * as React from "react";
import "./Login.css";
import axios from "axios";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import { Navigate } from 'react-router';


class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: "",
            password: "",
            loggedIn: false,
            errorMessage: "",
            loggedIn: false
        };
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleClick() {
        axios.post("https://localhost:5001/api/auth/login", {email: this.state.login, password: this.state.password}).then((res) =>
        {
            localStorage.setItem("access_token", res.data.token);
            this.setState({
                loggedIn: true
            });
        }).catch(err => {
            this.setState({
                errorMessage: err.response.data
            })
        })
    }

render() {
    return (
        this.state.loggedIn ? 
        <Navigate to="/accueil" />
        :
        <header className="login-header">
            <div className="loginMainDiv">
                <div className="connection">
                <Card className="loginCard">
                    <CardContent>
                    <div>
                        <TextField
                        required
                        id="outlined-required"
                        label="Login"
                        type="text"
                        name="login"
                        onChange={(e) => this.handleChange(e)}
                        />

                        <br/><br/>

                        <TextField
                        id="outlined-password-input"
                        label="Mot de passe"
                        type="password"
                        name="password"
                        onChange={(e) => this.handleChange(e)}
                        autoComplete="current-password"
                        />

                    </div>
                    
                    </CardContent>
                    <div  className="connection">
                    <CardActions>

                        <Button onClick={() => this.handleClick()} variant="contained" color="success" size="large">
                            Se connecter
                        </Button>
                        
                    </CardActions>
                    </div>
                    <span class="errMess">{this.state.errorMessage}</span>
                </Card>
                </div>
            </div>
        </header>
    );
}
}

export default Login;
