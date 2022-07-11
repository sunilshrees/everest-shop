import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const PRODUCTS_URL = process.env.REACT_APP_API_LINK;

const initialState = {
    products: [],
    singleProduct: [],
    productsContainer: [],
    loading: false,
    error: null,
};
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await axios.get(PRODUCTS_URL);
        return response.data.data.product;
    }
);
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        singleProduct: (state, action) => {
            state.singleProduct = state.products.filter((p) => {
                return p.id === action.payload;
            });
        },
        // searchByName: (state, action) => {
        //     state.products = state.productsContainer.filter((product) =>
        //         product.name
        //             .toLowerCase()
        //             .includes(action.payload.toLowerCase())
        //     );
        // },
        sortBy: (state, action) => {
            if (action.payload === 'price-lowest') {
                state.products = state.productsContainer.sort((a, b) =>
                    Number(a.price.substring(1) * 125) >
                    Number(b.price.substring(1) * 125)
                        ? 1
                        : -1
                );
            }
            if (action.payload === 'price-highest') {
                state.products = state.productsContainer.sort((a, b) =>
                    Number(b.price.substring(1) * 125) >
                    Number(a.price.substring(1) * 125)
                        ? 1
                        : -1
                );
            }

            if (action.payload === 'date-old') {
                state.products = state.productsContainer.sort((a, b) =>
                    a.createDate > b.createDate ? 1 : -1
                );
            }
            if (action.payload === 'date-new') {
                state.products = state.productsContainer.sort((a, b) =>
                    b.createDate > a.createDate ? 1 : -1
                );
            }
        },
        categoryFilter: (state, action) => {
            if (action.payload === 'all') {
                state.products = state.productsContainer;
            }
            if (action.payload !== 'all') {
                state.products = state.productsContainer.filter((product) =>
                    product.category.flat().includes(action.payload)
                );
            }
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
                state.error = '';
                state.productsContainer = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.products = [];
                state.error = action.error.message;
            });
    },
});

export const getAllProducts = (state) => state.products.products;
export const getProductsContainer = (state) => state.products.productsContainer;
export const getProductsLoading = (state) => state.products.loading;
export const getProductsError = (state) => state.products.error;
export const getSingleProduct = (state) => state.products.singleProduct;
export const { singleProduct, sortBy, categoryFilter } = productsSlice.actions;

export default productsSlice.reducer;
