import { ButtonGroup } from '@mui/material';
import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";

class LookHollidays extends React.Component {

    render() {

        return (
            <div>

                <Card className="Demandes">
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

                    <span class="errMess">{this.state.errorMessage}</span>
                </Card>
            </div>
        )

    }

}

export default LookHollidays;