import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom'

class Beers extends React.Component {
  state = { beers: [] }

    componentDidMount() {
    axios.get('/api/all_beers')
      .then( res => 
        this.setState({ beers: res.data}) )
  }

  render() {
    let { beers } = this.state
    return (
      <ul>
        <li image={beers}></li>
        
      </ul>
    )
  }
}

       
      
      

        
    



export default Beers;