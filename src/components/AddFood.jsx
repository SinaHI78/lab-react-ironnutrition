import { useState } from 'react';
import React from 'react';

const AddFood = (props) => {
  const [displayForm, setDisplayForm] = useState(false);
  // const [newFood, setNewFood] = useState({});
  const [name, setName] = useState('');
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState('');

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleCaloriesChange = (event) => {
    const value = event.target.value;
    setCalories(value);
  };

  const handleImageChange = (event) => {
    const value = event.target.value;
    setImage(value);
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    props.addFoodFunction({ name, calories, image });
    alert('User submitted form with new food');
  };

  const handleDisplay = (event) => {
    event.preventDefault();
    setDisplayForm(!displayForm);
  };

  return (
    <>
      {displayForm === true ? (
        <div>
          <form onSubmit={handleFormSubmission}>
            <input
              value={name}
              placeholder="Name"
              onChange={handleNameChange}
            />
            <input
              value={calories}
              placeholder="Calories"
              onChange={handleCaloriesChange}
            />
            <input
              value={image}
              placeholder="Image"
              onChange={handleImageChange}
            />
            <button>Add New Food</button>
          </form>
        </div>
      ) : (
        ''
      )}
      <button onClick={handleDisplay}>Show Form</button>
    </>
  );
};

export default AddFood;
