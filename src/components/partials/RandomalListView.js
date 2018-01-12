import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Actions from '../../action/randomals/Actions';

import LikeComponent from './LikeComponent';

import '../../style/card.css';

class RandomalListView extends Component {
  render() {
    return (
      <React.Fragment>
        { this.getRandomals() }
      </React.Fragment>
    );
  }

  displayDeleteButton = (randomal) => {
    if (this.userId() === randomal.creator) {
      return <button onClick={ (e) => this.deleteRandomal(randomal) }>Delete</button>;
    }
  }

  displayTraitsForRandomal = (randomal) => {
    return Object.keys(randomal.looks).map((trait) =>
      (<li key={trait}>{ trait }: { randomal.looks[trait] }</li>))
  }

  getRandomals = () => {
    if (this.props.randomals.length === 0) {
      return (
        <div className="card">
          <h3>No Randomals to show :(</h3>
          { this.userId() ? (<Link to="/add">Add a Randomal</Link>) : '' }
        </div>
      )
    }
    return this.props.randomals.map((randomal) => {
      return (
        <div key={ randomal.id } className="card">
          <h3>{ randomal.name }</h3>
          <p>Made by: { randomal.creator }</p>
          { this.displayDeleteButton(randomal) }
          <LikeComponent
            likes={ randomal.likes.length }
            canLike={ this.userId() && this.userId() !== randomal.creator }
            hasLiked={ randomal.likes.filter((uid) => uid === this.userId()).length > 0 }
            onLike={ () => this.likeRandomal(randomal) }
          />
          <ul>
           { this.displayTraitsForRandomal(randomal) }
          </ul>
        </div>
      )
    });
  }

  userId() {
    if (this.props.auth.user) {
      return this.props.auth.user.uid;
    }
  }

  // Actions
  deleteRandomal = (randomal) => Actions.deleteRandomal(randomal, this.props.auth.user);

  likeRandomal = (randomal) => Actions.likeRandomal(randomal, this.props.auth.user);
}

export default RandomalListView;
