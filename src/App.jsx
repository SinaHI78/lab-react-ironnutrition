import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox';
// import AddFood from './components/AddFood';

function App() {
  return (
    <div className="App">
      <FoodBox />
      {/* <AddFood /> */}
      <button>Add food</button>
    </div>
  );
}

export default App;
