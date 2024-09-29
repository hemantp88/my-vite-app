import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/productSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    // <div>
    //   <h2>Search Products</h2>
    //   <input type="text" placeholder="Search..." onChange={handleSearch} />
    // </div>
    <div className="input-group mb-3">
    <input
      type="text"
      className="form-control"
      placeholder="Search products..."
      onChange={handleSearch}
    />
  </div>
  );
};

export default SearchBar;
