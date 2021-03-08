import React from "react";
import "../../Css/input.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import "material-icons/iconfont/material-icons.css";
import Ripples from "react-ripples";
import { IconContext } from "react-icons";
import { FaApple, FaFacebookF, FaGithub } from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { apple } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button, TextInput } from "react-materialize";

function InputField() {
  function passwordVisibility() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  const LoginForm = () => {
    // const element = <FontAwesomeIcon icon={apple} />;
    return (
      <div className="row   form-container">
        {/* <div>xx</div> */}
        {/* <div className="col l12 login-text"> */}
        <h5 className="login-text">Login</h5>
        {/* </div> */}
        <form class="col s12 ">
          <div className="row ">
            <div className="inputs ">
              <div className="row ">
                <div class="input-field col s12">
                  <span class="material-icons prefix">email</span>

                  <input id="email" type="email" class="validate" />
                  <label for="email">Email</label>
                  <span
                    class="helper-text"
                    data-error="wrong"
                    data-success="right"
                  >
                    Helper text
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <span class="material-icons prefix">enhanced_encryption</span>
                  <input id="password" type="password" class="validate" />
                  <label for="password">Password</label>
                </div>

                {/* <p></p> */}
              </div>
            </div>
            {/* check in and show password */}
            <div className="row center-checkbox  ">
              <div className="center-btn">
                <p className="col s12 col m5 col l4">
                  <label>
                    <input type="checkbox" onClick={passwordVisibility} />
                    <span> Show Password</span>
                  </label>
                </p>
              </div>
              <div className="col m2 col s0 col l4 "></div>
              {/* <p className="col s12  col m5"> */}
              <div className="center-btn align-center">
                <a
                  className="waves-effect  waves-teal btn-flat col m5   cell col s12 col l4"
                  // style={{  }}
                  style={{
                    // border: "1px solid #26a69a",
                    // border: "1px solid #26a69a",
                    textTransform: "Lowercase",
                  }}
                >
                  <center>forgot password ?</center>
                </a>
              </div>

              {/* </p> */}
            </div>
            <div className="center-parent row ">
              <div className="center-btn  ">
                {/* <div className="col m6  "> */}
                <button
                  className="btn waves-effect waves-light  col s12   col m5  col l4"
                  type="submit"
                  name="action"
                >
                  Login
                  {/* <i class="material-icons right">send</i> */}
                </button>
              </div>

              <div className="col m2 col l4"></div>

              <div className="center-btn2 flat">
                <button
                  class="waves-effect waves-teal btn-flat  col s12   col m5  col l4"
                  style={{ border: "1px solid #26a69a" }}
                  type="submit"
                  name="action"
                >
                  Register
                </button>
                {/* </div> */}
              </div>
            </div>
            <div className="row">
              <div className="joinUs flex">
                <h6 className=""> Or Join Us With</h6>
              </div>
              <div className=" flex   ">
                <Ripples className="div ">
                  <IconContext.Provider
                    value={{ color: "#26a69a", className: "global-class-name" }}
                  >
                    <FaApple />
                  </IconContext.Provider>
                </Ripples>
                <Ripples className="div ">
                  <IconContext.Provider
                    value={{ color: "#26a69a", className: "global-class-name" }}
                  >
                    <FaFacebookF />
                  </IconContext.Provider>
                </Ripples>
                <Ripples className="div ">
                  <IconContext.Provider
                    value={{ color: "#26a69a", className: "global-class-name" }}
                  >
                    <FaGithub />
                  </IconContext.Provider>
                </Ripples>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div className="loginContainer container">
      {/* <div className="row "></div> */}
      <LoginForm />
    </div>
  );
}

export default InputField;
