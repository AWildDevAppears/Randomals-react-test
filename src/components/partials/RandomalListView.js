import React, { Component } from 'react';
import Actions from '../../action/randomals/Actions';

import LikeComponent from './LikeComponent';

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
    return this.props.randomals.map((randomal) => {
      return (
        <div key={ randomal.id } className="card">
          <h3>{ randomal.name }</h3>
          <p>Made by: { randomal.creator }</p>
          { this.displayDeleteButton(randomal) }
          <LikeComponent
            likes={ randomal.likes.length }
            canLike={ this.userId() !== randomal.creator }
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

  deleteRandomal = (randomal) => {
    Actions.deleteRandomal(randomal, this.props.auth.user);
  }

  likeRandomal = (randomal) => {
    Actions.likeRandomal(randomal, this.props.auth.user)
  }

  userId() {
    if (this.props.auth.user) {
      return this.props.auth.user.uid;
    }
  }
}

export default RandomalListView;
