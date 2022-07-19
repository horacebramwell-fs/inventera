import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productService from './productService';

/* INITIAL STATE */
const initialState = {
  products: [],
  product: {},
  loading: false,
  success: false,
  error: false,
  message: null,
};

/* GET PRODUCTS */
export const getProducts = createAsyncThunk(
  'product/getProducts',
  async (token, thunkAPI) => {
    const products = await productService.getProducts(token);

    if (products.error) {
      return thunkAPI.rejectWithValue(products.error.message);
    }

    return products.products;
  },
);

/* GET PRODUCT */
export const getProduct = createAsyncThunk(
  'product/getProduct',
  async (data, thunkAPI) => {
    const { productId, token } = data;

    const product = await productService.getProduct(token, productId);

    if (product.error) {
      return thunkAPI.rejectWithValue(product.error.message);
    }

    return product.product;
  },
);

/* CREATE PRODUCT */
export const createProduct = createAsyncThunk(
  'product/createProduct',
  async (data, thunkAPI) => {
    const { product, token } = data;

    const newProduct = await productService.createProduct(token, product);

    if (newProduct.error) {
      return thunkAPI.rejectWithValue(newProduct.error.message);
    }

    return newProduct.product;
  },
);

/* UPDATE PRODUCT */
export const updateProduct = createAsyncThunk(
  'product/updateProduct',
  async (data, thunkAPI) => {
    const { product, productId, token } = data;

    const updatedProduct = await productService.updateProduct(
      token,
      productId,
      product,
    );

    if (updatedProduct.error) {
      return thunkAPI.rejectWithValue(updatedProduct.error.message);
    }

    return updatedProduct.product;
  },
);

/* DELETE PRODUCT */
export const deleteProduct = createAsyncThunk(
  'product/deleteProduct',
  async (data, thunkAPI) => {
    const { productId, token } = data;

    const deletedProduct = await productService.deleteProduct(token, productId);

    if (deletedProduct.error) {
      return thunkAPI.rejectWithValue(deletedProduct.error.message);
    }

    return deletedProduct.product;
  },
);

/* PRODUCT SLICE */
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.error = false;
      state.message = null;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    resetProducts: (state) => {
      state.products = [];
      state.product = {};
      state.loading = false;
      state.success = false;
      state.error = false;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
      state.message = action.payload;
    });
    builder.addCase(getProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.product = action.payload;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
      state.message = action.payload;
    });
    builder.addCase(createProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.products.push(action.payload);
      state.product = action.payload;
      state.loading = false;
      state.success = true;
      state.message = 'Product created successfully';
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
      state.message = action.payload;
      state.success = false;
    });
    builder.addCase(updateProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id,
      );
      state.products[index] = action.payload;
      state.loading = false;
      state.success = true;
      state.error = false;
      state.message = 'Product updated successfully';
    });
    builder.addCase(updateProduct.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
      state.message = action.payload;
    });
    builder.addCase(deleteProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id,
      );
      state.products.splice(index, 1);
      state.loading = false;
      state.success = true;
      state.error = false;
      state.message = 'Product deleted successfully';
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
      state.message = action.payload;
    });
  },
});

export const { reset, setProduct, resetProducts } = productSlice.actions;

export default productSlice.reducer;
