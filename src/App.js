import React from 'react';
import CardList from './CardList';
import { robots } from './robots';

const App = () => {
  return (
    <>
      <h1>RoboFriends</h1>
      <CardList robots={robots} />
    </>
  );
};

export default App;
