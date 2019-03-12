import React, { Component } from 'react';

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
