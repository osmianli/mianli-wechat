import React, { Component } from 'react';
import { observer, inject } from "mobx-react";

/**
 *
 */
class EnrollIndex extends Component {

  render() {
    
    return (
      <div className="enroll-group">
        {this.props.children}
      </div>
    );
  }
}

export default EnrollIndex;
