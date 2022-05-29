import React from 'react';

const SearchBar = (props) => {
  const searchChange = (event) => {
    const value = event.target.value;
    props.changeHandler(value);
  };

  return (
    <>
      <input onChange={searchChange} type="text" placeholder="Search..." />
    </>
  );
};

export default SearchBar;
