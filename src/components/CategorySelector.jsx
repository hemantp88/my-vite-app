
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setSelectedCategory } from '../redux/productSlice';

// const CategorySelector = () => {
//   const dispatch = useDispatch();
//   const categories = useSelector((state) => state.products.categories);
//   const selectedCategory = useSelector((state) => state.products.selectedCategory);

//   const handleSelect = (category) => {
//     dispatch(setSelectedCategory(category ? category.slug : ''));
//   };

//   return (
//     <div className="mb-3">
//       <h2 className="mb-3">Select Category</h2>
//       <ul className="list-group">
//         <li 
//           className={`list-group-item ${selectedCategory === '' ? 'active' : ''}`} 
//           onClick={() => handleSelect('')} 
//           style={{ cursor: 'pointer' }}
//         >
//           All Products
//         </li>
//         {categories.map((category, idx) => (
//           <li 
//             key={idx} 
//             className={`list-group-item ${selectedCategory === category.slug ? 'active' : ''}`} 
//             onClick={() => handleSelect(category)} 
//             style={{ cursor: 'pointer' }}
//           >
//             {category.slug.charAt(0).toUpperCase() + category.slug.slice(1)}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CategorySelector;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategory } from '../redux/productSlice';

const CategorySelector = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.categories);
  const selectedCategory = useSelector((state) => state.products.selectedCategory);

  const handleSelectChange = (e) => {
    const selectedSlug = e.target.value;
    dispatch(setSelectedCategory(selectedSlug));
  };

  return (
    <div className="mb-3">
      <h2 className="mb-3">Select Category</h2>
      <select
        className="form-select"
        aria-label="Category select"
        value={selectedCategory}
        onChange={handleSelectChange}
      >
        <option value="">All Products</option>
        {categories.map((category, idx) => (
          <option key={idx} value={category.slug}>
            {category.slug.charAt(0).toUpperCase() + category.slug.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
