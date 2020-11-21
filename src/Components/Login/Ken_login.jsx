import { CropFree } from '@material-ui/icons';
import React from 'react';
import '../../App.css';
import '../../Css/Ken_login.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { Grid, Paper} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';

const CustStyles = {
    Paper: {paddingTop: 70, backgroundColor: pink}
}

const Ken_login = ()=>{
    return(
    <div>
        <Grid container md={12} style={CustStyles.Paper}>
            <Grid item sm={6} >
                <Paper style={CustStyles.Paper}>
                    paper 1
                </Paper>
            </Grid>
            <Grid item sm={6}>
                <Paper style={CustStyles.Paper}>Paper 2</Paper>
            </Grid>
        </Grid>
    </div>
    );
}

export default Ken_login;
