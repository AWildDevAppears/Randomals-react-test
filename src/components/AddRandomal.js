import React, { Component } from 'react';

import Actions from '../action/randomals/Actions';

class Home extends Component {
  state = {
    name: '',
    looks: {
      ears: false,
      nose: false,
      color: false,
      eyes: false,
    },
  }

  render() {
    return (
      <React.Fragment>
        <h1>Add a new Randomal</h1>

        <form onSubmit={ this.addRandomal }>
          <label>
            Name
            <input type="text" value={ this.state.name } onChange={ this.setName } />
          </label>

          <h3>What does your Randomal look like?</h3>

          <fieldset>
            <legend>My Randomals ears are:</legend>

            <label>
              <input type="radio" name="ears" value='pointy' onChange={ this.setLooks } checked={ this.state.looks.ears === 'pointy' } />
              Pointy
            </label>

            <label>
              <input type="radio" name="ears" value='rounded' onChange={ this.setLooks } checked={ this.state.looks.ears === 'rounded' } />
              Rounded
            </label>

            <label>
              <input type="radio" name="ears" value='long' onChange={ this.setLooks } checked={ this.state.looks.ears === 'long' } />
              Long
            </label>

            <label>
              <input type="radio" name="ears" value='none' onChange={ this.setLooks } checked={ this.state.looks.ears === 'none' } />
              None
            </label>
          </fieldset>

          <fieldset>
            <legend>My Randomals eyes are:</legend>

            <label>
              <input type="radio" name="eyes" value='happy' onChange={ this.setLooks } checked={ this.state.looks.eyes === 'happy' } />
              Happy
            </label>

            <label>
              <input type="radio" name="eyes" value='sleepy' onChange={ this.setLooks } checked={ this.state.looks.eyes === 'sleepy' } />
              Sleepy
            </label>

            <label>
              <input type="radio" name="eyes" value='energetic' onChange={ this.setLooks } checked={ this.state.looks.eyes === 'energetic' } />
              Energetic
            </label>

            <label>
              <input type="radio" name="eyes" value='crazed' onChange={ this.setLooks } checked={ this.state.looks.eyes === 'crazed' } />
              Crazed
            </label>
          </fieldset>

          <fieldset>
            <legend>My Randomals nose is:</legend>

            <label>
              <input type="radio" name="nose" value='rounded' onChange={ this.setLooks } checked={ this.state.looks.nose === 'rounded' } />
              Rounded
            </label>

            <label>
              <input type="radio" name="nose" value='beak' onChange={ this.setLooks } checked={ this.state.looks.nose === 'beak' } />
              Beak
            </label>

            <label>
              <input type="radio" name="nose" value='snout' onChange={ this.setLooks } checked={ this.state.looks.nose === 'snout' } />
              Snout
            </label>

            <label>
              <input type="radio" name="nose" value='reptilian' onChange={ this.setLooks } checked={ this.state.looks.nose === 'reptilian' } />
              Reptilian
            </label>
          </fieldset>

          <fieldset>
            <legend>My Randomals color is:</legend>

            <label>
              <input type="radio" name="color" value='red' onChange={ this.setLooks } checked={ this.state.looks.color === 'red' } />
              Red
            </label>

            <label>
              <input type="radio" name="color" value='blue' onChange={ this.setLooks } checked={ this.state.looks.color === 'blue' } />
              Blue
            </label>

            <label>
              <input type="radio" name="color" value='green' onChange={ this.setLooks } checked={ this.state.looks.color === 'green' } />
              Green
            </label>

            <label>
              <input type="radio" name="color" value='pink' onChange={ this.setLooks } checked={ this.state.looks.color === 'pink' } />
              Pink
            </label>

            <label>
              <input type="radio" name="color" value='purple' onChange={ this.setLooks } checked={ this.state.looks.color === 'purple' } />
              Purple
            </label>

            <label>
              <input type="radio" name="color" value='yellow' onChange={ this.setLooks } checked={ this.state.looks.color === 'yellow' } />
              Yellow
            </label>

            <label>
              <input type="radio" name="color" value='cream' onChange={ this.setLooks } checked={ this.state.looks.color === 'cream' } />
              Cream
            </label>
          </fieldset>

          <input type="submit" value="Add randomal" />
        </form>
      </React.Fragment>
    );
  }

  setName = (e) => {
    this.setState({
      ...this.state,
      name: e.target.value,
    });
  }

  setLooks = (e) => {
    this.setState({
      ...this.state,
      looks: {
        ...this.state.looks,
        [e.target.name]: e.target.value,
      }
    })
  }

  addRandomal = (e) => {
    e.preventDefault();
    if (this.state.name.trim().length === 0 || !this.allLookFieldsPopulated()) {
      return;
    }

    let randomal = {
      ...this.state,
      date: Date.now(),
    };

    Actions.addRandomal(randomal, this.props.auth.user)

    this.props.history.push('/my-list');
  }

  allLookFieldsPopulated = () => {
    let keys = Object.keys(this.state.looks);
    return keys.filter((item) => this.state.looks[item]).length === keys.length
  }
}

export default Home;
