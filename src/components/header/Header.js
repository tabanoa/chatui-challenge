import React, { Component } from 'react'
import "./Header.css"
import logo from "./../../images/logo.png"

export default class Header extends Component {
    render() {
        return (
          <div className="header">
            <div className="header__logo">
              <img src={logo} alt="quickchat"></img>
            </div>
          </div>
        );
    }
}
