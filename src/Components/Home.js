import React, { Component } from 'react';
import { Link } from 'react-router-dom';

 class Home extends Component {
  render() {
    return (
      <div>
        <h2>Facial Detection & Recognition App</h2>
        <li>
          <Link to="/photo">Detect from Photo</Link>
        </li>
        <li>
          <Link to="/camera">Video Camera</Link>
        </li>
      </div>
    );
  }
}
export default Home;