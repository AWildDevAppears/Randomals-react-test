import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import RandomalsStore from '../../store/RandomalsStore';
import Actions from '../../action/randomals/Actions';

class RandomalListView extends Component {
  render() {
    return (
      <React.Fragment>
        { this.getRandomals() }
      </React.Fragment>
    );
  }

  displayDeleteButton = (randomal) => {
    if (this.props.auth.user && this.props.auth.user.uid === randomal.creator) {
      return <button onClick={ (e) => this.deleteRandomal(randomal) }>Delete</button>;
    }
  }

  displayTraitsForRandomal = (randomal) => {
    return Object.keys(randomal.looks).map((trait) =>
      (<li key={trait}>{ trait }: { randomal.looks[trait] }</li>))
  }

  getRandomals = () => {
    return this.props.randomals.map((randomal) => {
      return (
        <div key={ randomal.id } className="card">
          <h3>{ randomal.name }</h3>
          <p>Made by: { randomal.creator }</p>
          { this.displayDeleteButton(randomal) }
          <ul>
            { this.displayTraitsForRandomal(randomal) }
          </ul>
        </div>
      )
    });
  }

  deleteRandomal = (randomal) => {
    Actions.deleteRandomal(randomal, this.props.auth.user);
  }


}

export default RandomalListView;
