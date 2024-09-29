import React from 'react';
import { useSelector } from 'react-redux';

const ProductList = ({ loadMore }) => {
  const products = useSelector((state) => state.products.products);
  const selectedCategory = useSelector((state) => state.products.selectedCategory);
  const searchQuery = useSelector((state) => state.products.searchQuery);
  // console.log("before filter",products)

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
 


  return (

<div className="row">
  {filteredProducts.map((product, idx) => (
    <div className="col-md-4 mb-3" key={idx}>
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">${product.price}</p>
        </div>
      </div>
    </div>
  ))}
</div>
  );
};

export default ProductList;
