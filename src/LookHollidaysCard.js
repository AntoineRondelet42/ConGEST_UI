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
import Moment from 'react-moment';

class LookHollidaysCard extends React.Component {

    constructor(props){
        super(props)
    }
    render() {

        return (
               <Card className="Demandes">
                    <CardContent>
                        <Typography variant="h5">
                            <div>
                                Date de la demande:  <Moment format="DD/MM/YYYY">{this.props.data.dateAsk}</Moment>
                            </div>
                            <div>
                                Date de début:  <Moment format="DD/MM/YYYY">{this.props.data.dateBegin}</Moment>
                            </div>
                            <div>
                                Date de fin:  <Moment format="DD/MM/YYYY">{this.props.data.dateEnd}</Moment>
                            </div>
                        </Typography>
                    </CardContent>
                </Card>
        )

    }

}

export default LookHollidaysCard;