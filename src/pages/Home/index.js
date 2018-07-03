// @flow
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Home</h1>
    <Link to="/login">Login!</Link>
  </div>
);

export default Home;
