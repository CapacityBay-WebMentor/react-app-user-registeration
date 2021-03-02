import React from 'react';
import '../../App.css';
import Download from '../../img/download.svg';
import Graph from '../../img/pic.png';
import Button from '@material-ui/core/Button';
import {ThemeProvider,  createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import '../../Css/Ken_landing.css';
import  './landStyle';

const theme= createMuiTheme({
palette:{
  primary: {
    main: "#fe4300"
  }
}
});

function Landing() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="header">
            <div className="logo"><img src={Download} alt="check"/></div>
            <a className="mobile-gate">Login</a>
            <div className="menu">
                <a href="#">Who we are</a>
                <a href="#">What we do</a>
                <a href="#">Benefits</a>
            </div>
            <div className="menu-btn">
                <a href="">Login</a>
                <a class="hov" href="">Become a member</a>
            </div>
        </div>
        <div className="section-1">
          <div className="space-40"></div>
          <div className="landing-box">
            <h1>Africa Digital Epidemiology Innovation Network.</h1>
            <p>A community that provides an opportunity for members to lend their expertise and resources, to collaborate and conduct research for various projects in epidemiology.</p>
          </div>
          <Button size="large" variant="contained" color="primary" style={{fontSize: '46px'}}>Become a member</Button>
        <img src="{Graph}" alt=""/>
        </div>
    </div>
    </ThemeProvider>
    
  );
}

export default Landing;
