import React, { Component } from 'react';
import '../../Css/CalliLogin.css';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import { yellow } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockIcon from '@material-ui/icons/Lock';
import Paper from '@material-ui/core/Paper';

//  i am still working on this interface

class CalliLogin extends Component {

    useStyles = makeStyles(
        {
            root: {
                width: "40%",
                // marginBottom: "2rem"

            }
        }
    )
    inputStyles = makeStyles(
        {
            root: {
                // width: "40%",
                // marginBottom: "2rem"
                fontSize: "1rem"
            }
        }
    )
    // < Button color = "primary" > Primary</Button>
    forgotPasswordComponent = () => {
        return <Button color="primary">forgot Password?</Button>
    }
    CheckBoxComponent = () => {
        return <Checkbox />
    }
    StyledFabTwitter = () => {
        return <Fab color="primary"  >
            <div className="twitter"></div>

        </Fab>
    }
    StyledFabGoogle = () => {
        return <Fab color="primary"  >
            <div className="googleIcon"></div>

        </Fab>
    }
    StyledFabFacebook = () => {
        return <Fab color="primary"  >
            <div className="facebookIcon" ></div>
        </Fab>
    }


    StyledButton = () => {
        const myStyle = this.useStyles()
        return <Button className={myStyle.root} size="small" variant="contained" color="primary">Login</Button>

    }

    StyledButton2 = () => {
        const myStyle = this.useStyles()
        return <Button className={myStyle.root} size="small" margin="normal" variant="outlined" color="primary">Create</Button>

    }



    StyledInput = () => {
        const classes = this.inputStyles();
        return (<TextField className={classes.root} I
            size="medium" id="outline-password-input" type="password"
            label="password" variant="outlined" style={{
                width: "100%"
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <LockIcon size="small" />
                    </InputAdornment>
                ),
            }} />)
    }
    render() {
        return (
            <div className="container "  >
                <div className="innerContainer">
                    <div className="illustration" >

                        <div className="img"></div>
                    </div>
                    <div className="form-section" style={{ width: "40%" }} >
                        <h2 className="welcomMsg">Welcome Back :)</h2>
                        <p className="welcomMsg">To keep connected with us please login with your personal information </p>

                        <TextField
                            id="input-with-icon-textfield"

                            required label="Email"
                            variant="outlined" style={{ width: "100%" }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <MailOutlineIcon size="small" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <this.StyledInput />
                        {/* checkbox and forgot password */}
                        <div>
                            <FormControlLabel
                                // classNam
                                control={<Checkbox color="primary" />}
                                label="Remember me"
                                labelPlacement="end"
                                style={{ fontSize: "10px" }}
                            />
                            <this.forgotPasswordComponent />
                        </div>
                        <div className="buttonSection">
                            <this.StyledButton />
                            <this.StyledButton2 />
                        </div>

                        <div><h5 className="welcomMsg">Or you can join us with</h5></div>
                        <div className="socials">
                            {/* <this.StyledFab /> */}
                            <this.StyledFabGoogle />
                            <this.StyledFabFacebook />
                            <this.StyledFabTwitter />


                        </div>



                    </div>
                </div>
            </div>
        )
    }
}

export default CalliLogin


