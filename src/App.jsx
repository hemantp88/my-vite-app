import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchProducts, setSelectedCategory, setSearchQuery } from './redux/productSlice';
import CategorySelector from './components/CategorySelector';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';

const App = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.categories);
  const products = useSelector((state) => state.products.products);
  const selectedCategory = useSelector((state) => state.products.selectedCategory);
  const searchQuery = useSelector((state) => state.products.searchQuery);
 
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts({ category: selectedCategory, offset }));
  }, [dispatch, selectedCategory, offset]);


  const loadMoreProducts = () => {
    setOffset((prevOffset) => prevOffset + 10);
  };

  return (

  <div className="container mt-4">
  <h1 className="text-center">Product Catalog</h1>
  <SearchBar />
  <CategorySelector />
  <ProductList loadMore={loadMoreProducts} />
  
  <div className="d-flex justify-content-center mt-4">
    <button className="btn btn-primary" onClick={loadMoreProducts}>
      Load More
    </button>
  </div>
</div>

  );
};

// Limitations of the app:
// 1. Does not handle network errors gracefully.
// 2. Basic styling; no advanced UI/UX features.
// 3. Search is case-sensitive and only checks for complete matches.
export default App;
