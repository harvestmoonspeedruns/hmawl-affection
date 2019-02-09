import React, { Component } from 'react';

export default class Heart extends Component {
  render() {
    return <div className="heart" title={this.props.level} />;
  }
}
