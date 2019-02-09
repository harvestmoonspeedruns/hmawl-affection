import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './Styles.scss';
import WaifuChooser from './src/Components/WaifuChooser';
import DateTracker from './src/Components/DateTracker';
import AffectionTracker from './src/Components/AffectionTracker';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      waifu: null,
    };

    this.onChoose = this.onChoose.bind(this);
  }

  onChoose(waifu) {
    this.setState({ waifu });
  }

  onReset() {
    window.location.reload();
  }

  render() {
    return (
      <div>
        <button className="reset" onClick={this.onReset}>Reset</button>
        {!this.state.waifu ?
          <WaifuChooser onChoose={this.onChoose} /> :
          <div className="tracker">
            <DateTracker />
            <AffectionTracker waifu={this.state.waifu} />
          </div>
        }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
