import React, { Component } from 'react';

import Data from '../Data';
import Heart from './Heart';

const giftImages = {
  flower: require('../Images/flower.jpg'),
  halfFlower: require('../Images/halfFlower.jpeg'),
  milk: require('../Images/milk.jpg'),
  talking: require('../Images/talk.png'),
  secondTalk: require('../Images/secondTalk.png'),
  mineItem: require('../Images/carter.jpg'),
  record: require('../Images/record.jpg'),
  egg: require('../Images/egg.jpg'),
  meal: require('../Images/turnip.jpg'),
  trickBlue: require('../Images/trickblue.jpg'),
  heartEvent: require('../Images/heart.png'),
};

export default class AffectionTracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      affection: 0,
    };
  }

  increaseAffection(ammount) {
    this.setState({ affection: this.state.affection + ammount });
  }

  renderAffection() {
    const levels = Data[this.props.waifu].heartLevels;

    if (this.state.affection >= levels[4]) {
      return <div className="hearts">{[...Array(4)].map(() => <Heart level={this.state.affection} />)}</div>;
    } else if (this.state.affection >= levels[3]) {
      return <div className="hearts">{[...Array(3)].map(() => <Heart level={this.state.affection} />)}</div>;
    } else if (this.state.affection >= levels[2]) {
      return <div className="hearts">{[...Array(2)].map(() => <Heart level={this.state.affection} />)}</div>;
    } else if (this.state.affection >= levels[1]) {
      return <div className="hearts">{[...Array(1)].map(() => <Heart level={this.state.affection} />)}</div>;
    }
    return <div className="hearts" />;
  }

  renderIcon(giftName) {
    return <img src={giftImages[giftName]} alt={giftName} />;
  }

  render() {
    return (
      <div className="affection-tracker">
        {this.renderAffection()}
        <h1>{this.props.waifu.toUpperCase()}: {this.state.affection}</h1>
        {Object.entries(Data[this.props.waifu].gifts).map(gift => (
          <button className="affection-btn" onClick={() => this.increaseAffection(gift[1])}>
            {this.renderIcon(gift[0])}
          </button>
        ))}
        <hr />
        <button onClick={() => this.increaseAffection(-0.5)}>Undo</button>
      </div>
    );
  }
}
