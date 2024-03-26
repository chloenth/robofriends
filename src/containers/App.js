import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

const App = () => {
  const [data, setData] = useState({
    robots: [],
    searchField: '',
  });

  const { robots, searchField } = data;

  useEffect(() => {
    fetch('https://jsonplaceholder.cypress.io/users')
      .then((res) => res.json())
      .then((users) => setData({ ...data, robots: users }));
  }, []);

  const onSearchChange = (e) => {
    setData({ ...data, searchField: e.target.value });
  };

  const filterRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filterRobots} />
      </Scroll>
    </div>
  );
};

export default App;
