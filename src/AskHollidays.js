import React from 'react';
import TextField from '@mui/material/TextField';
import DatePicker from 'react-datepicker'
import "./AskHollidays.scss";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import axios from 'axios';

import "react-datepicker/dist/react-datepicker.css";

class AskHollidays extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            dateBegin: '',
            dateEnd: ''
        }  
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleClick(){
        axios.post('https://localhost:5001/holliday', {
            dateBegin: this.state.dateBegin,
            dateEnd: this.state.dateEnd
        },
        {
            headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` }
        })
        .then(function (response) {
            alert("Congé créé");
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <header className="ask-header">
                <div className="askMainDiv">
                    <div className="confirm">
                    <Card className="askCard">
                        <CardContent>
                        <div>
                            Date de début de la période de congés :
                            <br/>
                            <TextField
                            required
                            id="outlined-required"
                            label=""
                            type="date"
                            name="dateBegin"
                            onChange={(e) => this.handleChange(e)}
                            />

                            <br/><br/>

                            Date de fin de la période de congés :
                            <br/>
                            <TextField
                            id="outlined-required"
                            label=""
                            type="date"
                            name="dateEnd"
                            onChange={(e) => this.handleChange(e)}
                            // autoComplete="current-password"
                            />

                        </div>
                        
                        </CardContent>

                        <div>
                        <CardActions className="confirmButton">
                            <Button onClick={() => this.handleClick()} variant="contained" color="success" size="large">
                                Demander
                            </Button>
                        </CardActions>
                        </div>
                        
                        {/* <span class="errMess">{this.state.errorMessage}</span> */}
                    </Card>
                    </div>
                </div>
                </header>
            </div>
        )
    }
}

export default AskHollidays;