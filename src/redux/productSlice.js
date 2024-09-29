import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategories = createAsyncThunk('products/fetchCategories', async () => {
  const response = await axios.get('https://dummyjson.com/products/categories');
  console.log(response)
  return response.data;
});

export const fetchProducts = createAsyncThunk('products/fetchProducts', async ({ category='', offset }) => {
    if(!category){
        const response = await axios.get(`https://dummyjson.com/products?limit=10&skip=${offset}`);
        return response.data
    }
  const response = await axios.get(`https://dummyjson.com/products/category/${category}?limit=10&skip=${offset}`);
  console.log("pro",response)
  return response.data;
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    categories: [],
    products: [],
    selectedCategory: '',
    searchQuery: '',
    totalProducts: 0,
  },
  reducers: {
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
      state.products = [];
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products.push(...action.payload.products);
        state.totalProducts = action.payload.total;
      });
  },
});

export const { setSelectedCategory, setSearchQuery } = productSlice.actions;
export default productSlice.reducer;
