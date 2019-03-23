import React, { Component } from 'react';

export default class WaifuChooser extends Component {
  render() {
    return (
      <div className="waifus">
        <h1>Choose a Waifu</h1>
        <button id="celia" onClick={() => this.props.onChoose('celia')}>Celia</button>
        <button id="muffy" onClick={() => this.props.onChoose('muffy')}>Muffy</button>
        <button id="nami" onClick={() => this.props.onChoose('nami')}>Nami</button>
        <button id="village" onClick={() => this.props.onChoose('village')}>Village</button>
      </div>
    );
  }
}
