import React, { Component } from 'react';
import { Button, WhiteSpace } from 'antd-mobile';

class Rating extends Component {
  render() {
    return (
      <div className="rateing">
        <Button type="primary">Rating</Button><WhiteSpace/>
      </div>
    );
  }
}

export default Rating;
