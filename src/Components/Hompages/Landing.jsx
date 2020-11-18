import React from 'react';
import '../../App.css';
import Download from '../../img/download.svg';


function Landing() {
  return (
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
        <div className="section1">

        </div>
    </div>
  );
}

export default Landing;
