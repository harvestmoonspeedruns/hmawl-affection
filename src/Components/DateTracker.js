import React, { Component } from 'react';

export default class DateTracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sleep: 1,
    };

    this.sleep = this.sleep.bind(this);
    this.undo = this.undo.bind(this);
  }

  sleep() {
    this.setState({ sleep: this.state.sleep + 1 });
  }

  undo() {
    this.setState({ sleep: this.state.sleep - 1 });
  }

  renderDate() {
    let season = 'Spring';

    const day = (this.state.sleep / 4) % 40;

    if (day >= 30) {
      season = 'Winter';
    } else if (day >= 20) {
      season = 'Fall';
    } else if (day >= 10) {
      season = 'Summer';
    }

    return <h1>{`${season} ${(day % 10) + 1}`}</h1>;
  }

  render() {
    return (
      <div className="date-tracker">
        {this.renderDate()}
        <button id="undo" onClick={this.undo}>&larr;</button>
        <button id="sleep" onClick={this.sleep}>&rarr;</button>
      </div>
    );
  }
}
