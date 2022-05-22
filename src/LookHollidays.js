import { ButtonGroup } from '@mui/material';
import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import "./LookHollidays.scss"
import LookHollidaysCard from './LookHollidaysCard';

class LookHollidays extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            conges: []
        }
    }
    componentDidMount(){
        axios.get('https://congest-api.azurewebsites.net/holliday/user',
            {
                headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` }
            }
        )
            .then(response => {
                console.log(response.data)
                this.setState({
                    conges: response.data
                })
        })
    }

    render() {

        return (
            <div>
                <div className='b-center'>
                    <br/>
                    <Link to="/Accueil">
                        <Button variant='contained' color='success' size='large'>
                            Retour à la page d'accueil
                        </Button>
                    </Link>
                    <br/>
                    <br/>
                </div>

                <div className="lookHollidays_main">
                    <div className="lookHollidays_column background-wait">

                    <div className="lookHoolidays_sectionTitle">
                        Demandes en attente
                    </div>
                        {this.state.conges.filter(c => c.validStateId == 1).map(conge => (
                            <LookHollidaysCard data={conge} />
                        ))}
                    </div>

                    <div className="lookHollidays_column background-accepted">
                        <div className="lookHoolidays_sectionTitle">
                            Congés acceptés
                        </div>
                        {this.state.conges.filter(c => c.validStateId == 2).map(conge => (
                            <LookHollidaysCard data={conge} />
                        ))}
                    </div>

                    <div className="lookHollidays_column background-rejected">
                        <div className="lookHoolidays_sectionTitle">
                            Congés refusés
                        </div>
                        {this.state.conges.filter(c => c.validStateId == 3).map(conge => (
                            <LookHollidaysCard data={conge} />
                        ))}
                    </div>
            
                </div>
            </div>

        )

    }

}

export default LookHollidays;