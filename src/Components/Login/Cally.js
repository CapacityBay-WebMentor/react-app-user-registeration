import React from "react";
import "../../Css/Cally.css";

import clsx from "clsx";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import InstagramIcon from "@material-ui/icons/Instagram";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import { green } from "@material-ui/core/colors";
import SvgIcon from "@material-ui/core/SvgIcon";
import TwitterIcon from "@material-ui/icons/Twitter";
import Fab from "@material-ui/core/Fab";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockIcon from "@material-ui/icons/Lock";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import OutlinedInput from "@material-ui/core/OutlinedInput";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "100%",
  },
  greenButton: {
    "&:hover": {
      border: "yellow",
    },
  },
  font: {
    fontSize: "0.7rem",
  },
  fabBackround: {
    borderColor: "#ffffff",
  },
  // '&:hover':bac
}));

function Cally() {
  function showPwd(id, el) {
    let x = document.getElementById(id);
    if (x.type === "password") {
      x.type = "text";
      el.className = "fa fa-eye-slash showpwd";
    } else {
      x.type = "password";
      el.className = "fa fa-eye showpwd";
    }
  }
  const classes = useStyles();

  const PasswordInput = () => {
    const [values, setValues] = React.useState({
      password: "",
      showPassword: false,
    });

    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return (
      <div className={classes.root}>
        <FormControl className={clsx(classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            className={classes.greenButton}
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            startAdornment={
              <InputAdornment position="start">
                <LockIcon size="small" style={{ color: "#ceb7b7" }} />
              </InputAdornment>
            }
            // style={{ width: "100%" }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
      </div>
    );
  };
  return (
    <div>
      <div className="loginContainer">
        <div className="svg-container">
          {/* <img src="../../img/illustration/undraw_secure_login_pdn4.svg" /> */}
          <div className="picture"></div>
        </div>
        <div className="loginForm">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Standard" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cally;
