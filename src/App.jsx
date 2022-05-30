import React from 'react';
import { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import data from './foods.json';
import FoodBoxList from './components/FoodBoxList';
import AddFood from './components/AddFood';
import SearchBar from './components/SearchBar';
import TodaysFoods from './components/TodaysFoods';

function App() {
  const [foodsArr, setFoodsArr] = useState(data);
  const [todaysFood, setTodaysFood] = useState([]);

  const updateFoodArr = (newFood) => {
    setFoodsArr([...foodsArr, newFood]);
  };

  const filterByName = (filter) => {
    setFoodsArr(
      data.filter((food) => {
        return food.name.startsWith(filter);
      })
    );
  };

  const addToTodaysFood = (food) => {
    console.log(food);
    setTodaysFood([...todaysFood, food]);
  };

  return (
    <div className="App">
      <h1>
        <strong>IronNutrition</strong>
      </h1>
      <SearchBar changeHandler={filterByName} />
      <div className="food">
        <AddFood addFoodFunction={updateFoodArr} />
        <FoodBoxList foods={foodsArr} addFood={addToTodaysFood} />
      </div>
      <div className="list">
        <TodaysFoods foods={todaysFood} />
      </div>
    </div>
  );
}

export default App;
