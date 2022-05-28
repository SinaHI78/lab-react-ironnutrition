import React from 'react';
import { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import data from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';

function App() {
  const [foodsArr, setFoodsArr] = useState(data);

  const updateFoodArr = (newFood) => {
    setFoodsArr([...foodsArr, newFood]);
  };

  return (
    <div className="App">
      <h1>
        <strong>IronNutrition</strong>
      </h1>
      <AddFood addFoodFunction={updateFoodArr} />
      <FoodBox foods={foodsArr} />
    </div>
  );
}

export default App;
