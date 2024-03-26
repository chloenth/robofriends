import React, { useEffect, useState } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';

const App = () => {
  const [data, setData] = useState({
    robots: [],
    searchField: '',
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.cypress.io/users')
      .then((res) => res.json())
      .then((users) => setData({ ...data, robots: users }));
  }, []);

  const onSearchChange = (e) => {
    setData({ ...data, searchField: e.target.value });
  };

  const filterRobots = data.robots.filter((robot) =>
    robot.name.toLowerCase().includes(data.searchField.toLowerCase())
  );

  if (data.robots.length === 0) {
    return <h1 className='tc'>Loading</h1>;
  }

  return (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <CardList robots={filterRobots} />
    </div>
  );
};

export default App;
