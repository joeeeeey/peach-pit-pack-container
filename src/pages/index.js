import React, { Component } from 'react';
import withRoot from '../withRoot'; // 用于读取 meterial-ui 主题

class Index extends Component {

  render() {
    return (
        <h1>Hello World. Im a container</h1>
    );
  }
}

export default withRoot(Index);
