import React, { useState } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

const App = () => {
  const [data, setData] = useState({
    robots,
    searchField: '',
  });

  const onSearchChange = (e) => {
    setData({ robots, searchField: e.target.value });
  };

  const filterRobots = data.robots.filter((robot) =>
    robot.name.toLowerCase().includes(data.searchField.toLowerCase())
  );

  return (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <CardList robots={filterRobots} />
    </div>
  );
};

export default App;
