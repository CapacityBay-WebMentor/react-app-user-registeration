import React from 'react';
import '../../App.css';
import Download from '../../img/download.svg';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const myDiv = styled.div`
  font-size:30px;
  color: red;
`

function Landing() {
  return (
    <div className="App">
        <div className="header">
            <div className="logo"><img src={Download} alt="check"/></div>
          
            <div className="menu">
                <a href="#">Who we are</a>
                <a href="#">What we do</a>
                <a href="#">Benefits</a>
            </div>
            <div className="menu-btn">
                <a href="#">Login</a>
                <Button variant="contained" color="primary">Become a member</Button>
            </div>
        </div>
        <div className="section1">
          <div className="call-to-action">
            <h1>Africa Digital Epidemiology <br/>Innovation Network.</h1>
            <p>A community that provides an opportunity for members to lend their expertise and resources, to collaborate and conduct research for various projects in epidemiology.</p>
            
          </div>
          <div className="buttonCont"> <Button variant="contained" size="large" style={{height: 70, borderRadius: 5}} color="primary">Become a member </Button> </div>
              {/* The three circular dots */}
            <div className="appleDots">
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>
    
    </div>
  );
}

export default Landing;
