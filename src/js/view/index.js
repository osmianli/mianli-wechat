import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import { Button, WhiteSpace,Toast } from 'antd-mobile';

/**
 *
 */
class Index extends Component {

  render() {
    
    return (
      <div className="enroll-group">
        {this.props.children}
      </div>
    );
  }
}

export default Index;
