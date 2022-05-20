import logo from './logo.svg';
// import { Button } from '@mui/material';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';
import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import Accueil from "./Accueil";


class App extends React.Component {
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
  }

  render(){
    return (
      <div className="App">
        <Accueil/>
      </div>
    );
  }
}

export default App;
