import React from 'react';

const TodaysFoods = (props) => {
  const calories = props.foods.reduce(
    (prevVal, currVal) => prevVal + currVal.calories,
    0
  );

  return (
    <div>
      <h2>Today's Foods</h2>
      {props.foods.map((food) => {
        return <div>{food.name}</div>;
      })}
      <p>Total: {calories}cal</p>
    </div>
  );
};

export default TodaysFoods;
