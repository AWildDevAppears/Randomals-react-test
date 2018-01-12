import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import RandomalsStore from '../../store/RandomalsStore';

class RandomalListView extends Component {

  render() {
    return (
      <React.Fragment>
        <h1>List of Randomals</h1>
        <button onClick={ this.addRandomal }>Add new Randomal</button>
        <button onClick={ this.myRandomals }>My Randomals</button>
        { this.getRandomals() }
      </React.Fragment>
    );
  }

  displayTraitsForRandomal = (randomal) => {
    return Object.keys(randomal.looks).map((trait) =>
      (<li key={trait}>{ trait }: { randomal.looks[trait] }</li>))
  }

  getRandomals = () => {
    return this.props.randomals.list.map((randomal) => {
      return (
        <div key={ randomal.id } className="card">
          <h3>{ randomal.name }</h3>
          <p>Made by: { randomal.creator }</p>
          <ul>
            { this.displayTraitsForRandomal(randomal) }
          </ul>
        </div>
      )
    });
  }

  addRandomal = (e) => this.props.history.push('/add');

  myRandomals = (e) => this.props.history.push('/my-list');
}

export default RandomalListView;
