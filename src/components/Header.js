import React, { Component } from "react";

// import { Container } from './styles';

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <img src="https://i.imgur.com/KDIDiSE.png" />
          <div>
            <span>Meu perfil</span>
            <i className="material-icons">account_circle</i>
          </div>
        </nav>
      </header>
    );
  }
}
