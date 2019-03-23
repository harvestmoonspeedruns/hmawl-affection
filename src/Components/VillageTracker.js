import React, { Component } from 'react';

import { village } from '../Data';

const map = require('../Images/forgetmenot.jpg');

const giftImages = {
  flower: require('../Images/flower.png'),
  fish: require('../Images/fish.png'),
  milk: require('../Images/milk.jpg'),
  mugwort: require('../Images/mogwurt.png'),
  coin: require('../Images/coin.png'),
  'trick blue': require('../Images/trick blue.png'),
  'joy flower': require('../Images/joy flower.png'),
  'light pickle': require('../Images/turnip.jpg'),
};

const profilePicture = {
  carter: require('../Images/carter.jpg'),
  chris: require('../Images/chris.png'),
  cody: require('../Images/cody.png'),
  daryl: require('../Images/daryl.png'),
  hardy: require('../Images/hardy.png'),
  galen: require('../Images/galen.png'),
  griffin: require('../Images/griffin.png'),
  kate: require('../Images/kate.png'),
  mukumuku: require('../Images/mukumuku.png'),
  rock: require('../Images/rock.png'),
  romana: require('../Images/romana.png'),
  sebastian: require('../Images/sebastian.png'),
  tim: require('../Images/tim.png'),
  vesta: require('../Images/vesta.png'),
  wally: require('../Images/wally.png'),
  takakura: require('../Images/takakura.png'),
};

export default class VillageTracker extends Component {
  constructor(props) {
    super(props);

    const newState = {};
    Object.keys(village).forEach((villager) => {
      newState[villager] = 0;
    });
    this.state = newState;
  }

  increaseAffection(villager) {
    this.setState({ [villager]: this.state[villager] + 1 });
  }

  renderIcon(giftName) {
    return <img title={giftName} className="tiny-img" key={giftName} src={giftImages[giftName]} alt={giftName} />;
  }

  renderVillager(name) {
    return (
      <div
        className={`villager ${name} ${this.state[name] >= village[name].friend ? 'friend' : 'enemy'}`}
        key={name}
        title={name}
        role="presentation"
        onClick={() => this.increaseAffection(name)}
      >
        <div className="color-stripe" style={{ backgroundColor: village[name].color }} />
        <img src={profilePicture[name]} alt={name} />
        <div>{this.state[name]}/{village[name].friend}</div>
        <div>
          {village[name].likes.map(item => this.renderIcon(item))}
        </div>
        <div>{village[name].time}</div>
      </div>);
  }

  render() {
    return (
      <div className="village-tracker">
        {Object.keys(village).map(name => this.renderVillager(name))}
        <div><img className="map"src={map} alt="map" /></div>
      </div>
    );
  }
}
