import React from 'react';

const Home = (props) => {
  console.log(props.location);
  console.log(props.match);
  console.log(props.history);
  return (
  <h1>sweet home</h1>
  )
}

export default Home;