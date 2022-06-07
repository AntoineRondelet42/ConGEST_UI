import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
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
                        <Typography variant="h7">
                            <div>
                                Date de la demande:  <Moment format="DD/MM/YYYY">{this.props.data.dateAsk}</Moment>
                            </div>
                            <div>
                                Date de début:  <Moment format="DD/MM/YYYY">{this.props.data.dateBegin}</Moment>
                            </div>
                            <div>
                                Date de fin:  <Moment format="DD/MM/YYYY">{this.props.data.dateEnd}</Moment>
                            </div>
                            <div>
                                Jours de congés ouvrés: {this.props.data.numberOfWorkingDays}
                            </div>

                            <div>
                                Commentaire : {this.props.data.commentaire}
                            </div>
                        </Typography>
                    </CardContent>
                </Card>
        )

    }

}

export default LookHollidaysCard;