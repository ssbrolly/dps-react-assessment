import React from 'react';
import axios from 'axios';

class Beers extends React.Component {
  render() {
    return(
      componentDidMount() {
        axios.get('/api/all_beers')
          .then( res => res.json() )
          .then( todos => this.setState({ todos }) )
      }
    );
  }
}

export default Beers;