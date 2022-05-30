import React from 'react';
import FoodBox from './FoodBox';

function FoodBoxList(props) {
  return (
    <>
      {props.foods.map((food) => {
        return <FoodBox food={food} addFood={props.addFood} />;
      })}
    </>
  );
}

export default FoodBoxList;
