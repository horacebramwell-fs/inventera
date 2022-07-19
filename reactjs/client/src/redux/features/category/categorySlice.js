import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import categoryService from './categoryService';

const initialState = {
  categories: [],
  category: {},
  loading: false,
  error: null,
  success: null,
};

/* GET CATEGORIES */
export const getCategories = createAsyncThunk(
  'category/getCategories',
  async (token, thunkAPI) => {
    const categories = await categoryService.getCategories(token);

    if (categories.error) {
      return thunkAPI.rejectWithValue(categories.error);
    }

    return categories.categories;
  },
);

/* GET CATEGORY */
export const getCategory = createAsyncThunk(
  'category/getCategory',
  async (data, thunkAPI) => {
    const { categoryId } = data;
    const { token } = data;

    const category = await categoryService.getCategory(token, categoryId);

    if (category.error) {
      return thunkAPI.rejectWithValue(category.error.message);
    }

    return category.category;
  },
);

/* CREATE CATEGORY */
export const createCategory = createAsyncThunk(
  'category/createCategory',
  async (data, thunkAPI) => {
    const { category } = data;
    const { token } = data;

    const newCategory = await categoryService.createCategory(token, category);

    if (newCategory.error) {
      return thunkAPI.rejectWithValue(newCategory.error.message);
    }

    return newCategory.category;
  },
);

/* UPDATE CATEGORY */
export const updateCategory = createAsyncThunk(
  'category/updateCategory',
  async (data, thunkAPI) => {
    const { categoryId, category } = data;
    const { token } = data;

    const updatedCategory = await categoryService.updateCategory(
      token,
      categoryId,
      category,
    );

    if (updatedCategory.error) {
      return thunkAPI.rejectWithValue(updatedCategory.error.message);
    }

    return updatedCategory.category;
  },
);

/* DELETE CATEGORY */
export const deleteCategory = createAsyncThunk(
  'category/deleteCategory',
  async (data, thunkAPI) => {
    const { categoryId } = data;
    const { token } = data;

    const deletedCategory = await categoryService.deleteCategory(
      token,
      categoryId,
    );

    if (deletedCategory.error) {
      return thunkAPI.rejectWithValue(deletedCategory.error.message);
    }

    return deletedCategory.category;
  },
);

/* CATEGORY SLICE */
const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories.push(action.payload);
    },
    resetCategories: (state) => {
      state.categories = [];
      state.category = {};
      state.loading = false;
      state.error = null;
      state.success = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.loading = false;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });

    builder.addCase(getCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.category = action.payload;
      state.loading = false;
    });
    builder.addCase(getCategory.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });

    builder.addCase(createCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createCategory.fulfilled, (state, action) => {
      state.categories.push(action.payload);
      state.category = action.payload;
      state.loading = false;
    });
    builder.addCase(createCategory.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });

    builder.addCase(updateCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateCategory.fulfilled, (state, action) => {
      state.category = action.payload;
      state.loading = false;
    });
    builder.addCase(updateCategory.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(deleteCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteCategory.fulfilled, (state, action) => {
      state.category = action.payload;
      state.loading = false;
    });
    builder.addCase(deleteCategory.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const { setCategories, resetCategories } = categorySlice.actions;

export default categorySlice.reducer;
