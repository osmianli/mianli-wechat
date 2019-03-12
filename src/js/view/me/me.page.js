import React, { Component } from 'react';
import {observer, inject} from "mobx-react";

class Me extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="me-page">
        {this.props.children}
      </div>
    );
  }
}

export default Me;
