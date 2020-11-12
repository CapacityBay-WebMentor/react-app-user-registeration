import { CropFree } from '@material-ui/icons';
import React from 'react';
import '../App.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(()=>{
    
})

const Ken_login = ()=>{
    return(
        <AppBar position="static">
        <Toolbar>
         <Typography>
             This a typo in a Toolbar
         </Typography>
         <AcUnitIcon />
        </Toolbar>
      </AppBar>
    );
}

export default Ken_login;
