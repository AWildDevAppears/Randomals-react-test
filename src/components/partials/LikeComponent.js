import React, { Component } from 'react';

class LikeComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div>{ this.props.likes } { (this.props.likes === 1 ? 'Like' : 'Likes') } </div>
        { this.displayLikeButton() }
      </React.Fragment>
    );
  }

  displayLikeButton = () => {
    if (this.props.canLike && !this.props.hasLiked) {
      return (<button onClick={ this.props.onLike }>Like?</button>)
    } else if (this.props.hasLiked) {
      return (<p>You have liked this Randomal</p>)
    }
  }
}

export default LikeComponent;
