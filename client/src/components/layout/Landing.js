import React, { Component } from "react";
import { Link } from "react-router-dom";
import Banner from "../../img/ibra.jpg";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "85vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <img src={Banner} alt="banner"/>
            
            <h4>
              <b>WORKSHOP: APURAÇÃO DE HAVERES</b> <br></br>{" "}
               AUDITÓRIO BRASIL-CANADÁ

            </h4>
            <p className="flow-text grey-text text-darken-1">
              Cadastre-se aqui para participar.
            </p>
            <br />
            <div className="col s6">
              
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Registrar
              </Link>
            
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Logar
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
