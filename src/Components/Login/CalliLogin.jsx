import React, { Component } from "react";
import "../../Css/CalliLogin.css";
import clsx from "clsx";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
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
import Particles from "react-particles-js";
// import Tilt from "react-tilt";npm start

//  i am still working on this interface
const iconColor = {
  color: " #ceb7b7",
};
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

// functional component

function PasswordInput() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
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
      <StylesProvider injectFirst>
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
      </StylesProvider>
    </div>
  );
}

function Twitter() {
  return (
    <div className="twitter">
      <TwitterIcon style={{ color: "#3f51b5" }} />
    </div>
  );
}
function Google() {
  return (
    <div className="google">
      <SvgIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="22px"
          height="22px"
        >
          <radialGradient
            id="95yY7w43Oj6n2vH63j6HJa"
            cx="31.998"
            cy="34.5"
            r="30.776"
            gradientTransform="matrix(1 0 0 -1 0 66)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#f4e9c3" />
            <stop offset=".219" stop-color="#f8eecd" />
            <stop offset=".644" stop-color="#fdf4dc" />
            <stop offset="1" stop-color="#fff6e1" />
          </radialGradient>
          <path
            fill="url(#95yY7w43Oj6n2vH63j6HJa)"
            d="M63.97,30.06C63.68,32.92,61.11,35,58.24,35H53c-1.22,0-2.18,1.08-1.97,2.34	c0.16,0.98,1.08,1.66,2.08,1.66h3.39c2.63,0,4.75,2.28,4.48,4.96C60.74,46.3,58.64,48,56.29,48H51c-1.22,0-2.18,1.08-1.97,2.34	c0.16,0.98,1.08,1.66,2.08,1.66h3.39c1.24,0,2.37,0.5,3.18,1.32C58.5,54.13,59,55.26,59,56.5c0,2.49-2.01,4.5-4.5,4.5h-44	c-1.52,0-2.9-0.62-3.89-1.61C5.62,58.4,5,57.02,5,55.5c0-3.04,2.46-5.5,5.5-5.5H14c1.22,0,2.18-1.08,1.97-2.34	C15.81,46.68,14.89,46,13.89,46H5.5c-2.63,0-4.75-2.28-4.48-4.96C1.26,38.7,3.36,37,5.71,37H13c1.71,0,3.09-1.43,3-3.16	C15.91,32.22,14.45,31,12.83,31H4.5c-2.63,0-4.75-2.28-4.48-4.96C0.26,23.7,2.37,22,4.71,22h9.79c1.24,0,2.37-0.5,3.18-1.32	C18.5,19.87,19,18.74,19,17.5c0-2.49-2.01-4.5-4.5-4.5h-6c-1.52,0-2.9-0.62-3.89-1.61S3,9.02,3,7.5C3,4.46,5.46,2,8.5,2h48	c3.21,0,5.8,2.79,5.47,6.06C61.68,10.92,60.11,13,57.24,13H55.5c-3.04,0-5.5,2.46-5.5,5.5c0,1.52,0.62,2.9,1.61,3.89	C52.6,23.38,53.98,24,55.5,24h3C61.71,24,64.3,26.79,63.97,30.06z"
          />
          <linearGradient
            id="95yY7w43Oj6n2vH63j6HJb"
            x1="29.401"
            x2="29.401"
            y1="4.064"
            y2="106.734"
            gradientTransform="matrix(1 0 0 -1 0 66)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#ff5840" />
            <stop offset=".007" stop-color="#ff5840" />
            <stop offset=".989" stop-color="#fa528c" />
            <stop offset="1" stop-color="#fa528c" />
          </linearGradient>
          <path
            fill="url(#95yY7w43Oj6n2vH63j6HJb)"
            d="M47.46,15.5l-1.37,1.48c-1.34,1.44-3.5,1.67-5.15,0.6c-2.71-1.75-6.43-3.13-11-2.37	c-4.94,0.83-9.17,3.85-11.64,7.97l-8.03-6.08C14.99,9.82,23.2,5,32.5,5c5,0,9.94,1.56,14.27,4.46	C48.81,10.83,49.13,13.71,47.46,15.5z"
          />
          <linearGradient
            id="95yY7w43Oj6n2vH63j6HJc"
            x1="12.148"
            x2="12.148"
            y1=".872"
            y2="47.812"
            gradientTransform="matrix(1 0 0 -1 0 66)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#feaa53" />
            <stop offset=".612" stop-color="#ffcd49" />
            <stop offset="1" stop-color="#ffde44" />
          </linearGradient>
          <path
            fill="url(#95yY7w43Oj6n2vH63j6HJc)"
            d="M16.01,30.91c-0.09,2.47,0.37,4.83,1.27,6.96l-8.21,6.05c-1.35-2.51-2.3-5.28-2.75-8.22	c-1.06-6.88,0.54-13.38,3.95-18.6l8.03,6.08C16.93,25.47,16.1,28.11,16.01,30.91z"
          />
          <linearGradient
            id="95yY7w43Oj6n2vH63j6HJd"
            x1="29.76"
            x2="29.76"
            y1="32.149"
            y2="-6.939"
            gradientTransform="matrix(1 0 0 -1 0 66)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#42d778" />
            <stop offset=".428" stop-color="#3dca76" />
            <stop offset="1" stop-color="#34b171" />
          </linearGradient>
          <path
            fill="url(#95yY7w43Oj6n2vH63j6HJd)"
            d="M50.45,51.28c-4.55,4.07-10.61,6.57-17.36,6.71C22.91,58.2,13.66,52.53,9.07,43.92l8.21-6.05	C19.78,43.81,25.67,48,32.5,48c3.94,0,7.52-1.28,10.33-3.44L50.45,51.28z"
          />
          <linearGradient
            id="95yY7w43Oj6n2vH63j6HJe"
            x1="46"
            x2="46"
            y1="3.638"
            y2="35.593"
            gradientTransform="matrix(1 0 0 -1 0 66)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#155cde" />
            <stop offset=".278" stop-color="#1f7fe5" />
            <stop offset=".569" stop-color="#279ceb" />
            <stop offset=".82" stop-color="#2cafef" />
            <stop offset="1" stop-color="#2eb5f0" />
          </linearGradient>
          <path
            fill="url(#95yY7w43Oj6n2vH63j6HJe)"
            d="M59,31.97c0.01,7.73-3.26,14.58-8.55,19.31l-7.62-6.72c2.1-1.61,3.77-3.71,4.84-6.15	c0.29-0.66-0.2-1.41-0.92-1.41H37c-2.21,0-4-1.79-4-4v-2c0-2.21,1.79-4,4-4h17C56.75,27,59,29.22,59,31.97z"
          />
        </svg>
      </SvgIcon>
    </div>
  );
}
function Facebook() {
  return (
    <div className="facebook">
      <SvgIcon>
        <svg
          fill="#3f51b5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="24px"
          height="24px"
        >
          <path d="M20.5,46c-1.378,0-2.5-1.121-2.5-2.5V26l-4.45,0.003c-1.367,0-2.489-1.11-2.501-2.476l-0.029-3.003 c-0.006-0.673,0.25-1.306,0.724-1.783C12.216,18.263,12.847,18,13.52,18H18v-4.5c0-6.746,3.442-10.462,9.691-10.462 c2.472,0,4.63,0.175,4.65,0.177c0.965,0.086,1.691,0.88,1.691,1.847v4.57c0,1.022-0.832,1.854-1.854,1.854h-2.908 c-1.217,0-2.208,0.99-2.208,2.208L27.006,18h4.438c0.713,0,1.393,0.306,1.867,0.838s0.699,1.243,0.616,1.951l-0.349,3 C33.432,25.05,32.364,26,31.096,26H27v17.5c0,1.379-1.122,2.5-2.5,2.5H20.5z" />
        </svg>
      </SvgIcon>
    </div>
  );
}
function EmailTextField() {
  return (
    <TextField
      id="input-with-icon-textfield"
      required
      label="Email"
      variant="outlined"
      style={{ width: "100%" }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <MailOutlineIcon size="small" style={iconColor} />
          </InputAdornment>
        ),
      }}
    />
  );
}

function FormController(props) {
  const setStyles = makeStyles((theme) => ({
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
        backgroundColor: "yellow",
        color: "#FFF",
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

  const useStyles = makeStyles({
    root: {
      width: "40%",
      // marginBottom: "2rem"
      // fontSize: "0.9rem",
    },
  });
  const inputStyles = makeStyles({
    root: {
      fontSize: "1rem",
    },
  });
  const iconColor = {
    color: " #ceb7b7",
  };

  const forgotPasswordComponent = () => {
    return <Button color="primary">forgot password?</Button>;
  };

  const CheckBoxComponent = () => {
    const classes = useStyles();

    return (
      <StylesProvider injectFirst>
        <FormControlLabel
          // classNam
          className={classes.font}
          control={<Checkbox color="primary" />}
          label="Remember me"
          labelPlacet="enmend"
          size="extra-small"
        />
      </StylesProvider>
    );
  };

  const StyledFabTwitter = () => {
    return (
      <div className="div3">
        <Twitter />
      </div>
    );
  };
  const StyledFabGoogle = () => {
    return (
      <div className="div1">
        <Google />
      </div>
    );
  };
  const StyledFabFacebook = () => {
    return (
      <div className="div2">
        <Facebook />
      </div>
    );
  };

  const StyledButton = () => {
    const myStyle = useStyles();
    return (
      <Button
        // style={{ fontSize: "1px" }}
        className={(myStyle.root, "btns")}
        size="medium"
        variant="contained"
        color="primary"
      >
        Login
      </Button>
    );
  };

  const StyledButton2 = () => {
    const myStyle = useStyles();
    // const classes = setStyles();

    return (
      <StylesProvider injectFirst>
        <Button
          className={(myStyle.root, "btns")}
          size="medium"
          margin="normal"
          variant="outlined"
          color="primary"
        >
          Create Account
        </Button>
      </StylesProvider>
    );
  };
  return (
    <StylesProvider injectFirst>
      {/* <div> */}
      <h2 className="welcomMsg">Welcome Back :)</h2>
      <p className="Para">
        To keep connected with us please login with your personal information
        {" 🔔"}
      </p>
      <EmailTextField />
      <PasswordInput />
      {/* checkbox and forgot password */}
      <div className="center">
        <CheckBoxComponent />
        <forgotPasswordComponent />
      </div>
      <div className="buttonSection">
        <StyledButton />
        <StyledButton2 />
      </div>

      <div>
        <p className="welcomMsg" style={{ color: "#382f34" }}>
          Or you can join us with
        </p>
      </div>
      <div className="socials">
        <StyledFabGoogle />
        <StyledFabFacebook />
        <StyledFabTwitter />
      </div>
      {/* </div> */}
    </StylesProvider>
  );
}
// smart Component
class CalliLogin extends Component {
  // < Button color="primary" > Primary</Button>
  checkMediaQuery = () => {};
  render() {
    return (
      <StylesProvider injectFirst>
        <div className="container">
          <div className="innerContainer">
            <div className="illustration">
              <div className="img"></div>
            </div>
            <div className="form-section" style={{ width: "45%" }}>
              {FormController()}

              {/* {window.addEventListener("resize", this.checkMediaQuery)} */}
            </div>
          </div>
        </div>
      </StylesProvider>
    );
  }
}

export default CalliLogin;
