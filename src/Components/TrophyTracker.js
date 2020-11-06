import React, { Component } from 'react';

import { trophies } from '../Data';

export default class TrophyTracker extends Component {
  constructor(props) {
    super(props);

    const prevState = JSON.parse(localStorage.getItem('trophies'));

    const newState = { tasks: {} };
    trophies.forEach((trophy) => {
      newState[trophy.id] = false;
      if (trophy.subtask)
      trophy.subtask.forEach((task) => { newState.tasks[task] = false });
    });
    this.state = prevState || newState;
  }

  completeTrophy(trophyId) {
    this.setState({ [trophyId]: !this.state[trophyId] });
    localStorage.setItem('trophies', JSON.stringify(this.state));
  }

  completeTask(task) {
    const newTasks = this.state.tasks;
    newTasks[task] = !this.state.tasks[task]
    this.setState({ tasks: newTasks });
    localStorage.setItem('trophies', JSON.stringify(this.state));
  }

  render() {
    return (
      <div className="village-tracker">
        {trophies.map(trophy => (
          <div className="trophy-wrapper" key={trophy.id.toString()}>
            <div onClick={() => this.completeTrophy(trophy.id)} className={`trophy ${this.state[trophy.id] ? 'complete' : 'incomplete'}`}>{trophy.name}</div>
            {trophy.subtask && <ul>{trophy.subtask.map(task => <li onClick={() => this.completeTask(task)} className={`task ${this.state.tasks[task] ? 'complete' : 'incomplete'}`} key={task}>{task}</li>)}</ul>}
          </div>
        ))}
      </div>
    );
  }
}
