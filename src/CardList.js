import React from 'react';
import Card from './Card';
import { robots } from './robots';

const CardList = () => {
  return (
    <div>
      {robots.map((robot, i) => {
        return (
          <Card key={i} id={robot.id} name={robot.name} email={robot.email} />
        );
      })}
    </div>
  );
};

export default CardList;
