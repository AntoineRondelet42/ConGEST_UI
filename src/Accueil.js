import logo from './logo.svg';
import './Accueil.css';
// import { Button } from '@mui/material';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';
import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

class Accueil extends React.Component{
    constructor(props){
        super(props);
    
            this.state = {
                toto: "toto",
                users: []
            }
        }
    
    componentDidMount(){
        axios.get("https://congest-api.azurewebsites.net/api/auth/user")
            .then(res => this.setState({
            users: res.data
        }));

        // console.log(validToken(localStorage.getItem("access_token")));

        console.log(!localStorage.getItem("access_token"))
    }


    render(){
        return (
            <div className="Acceuil">
                <header className="Accueil-header">
            
                    <h1>
                        Bienvenue sur votre espace salarié !
                    </h1>
            
                    {this.state.users.map(user => (
                        <div key={user.id}>
                        <li>
                            Nom : {user.firstName} {user.lastName}
                        </li>
                        <hr />
                        </div>
                    ))}
            
                    

                    <br/>


                        <div>

                            <Link to="/LookHollidays">
                                <Button variant='contained' color='success' size='large'>
                                    Voir mes congés
                                </Button>
                            </Link>
                            
                            <br/>

                            <Link to="/AskHollidays">
                                <Button variant='contained' color='success' size='large'>
                                    Demander des congés
                                </Button>
                            </Link>

                        </div>


                </header>
            </div>
        );
    }
}

export default Accueil;