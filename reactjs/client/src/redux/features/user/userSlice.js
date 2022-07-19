import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from './userService';

// Initial state for user data
const initialState = {
  userData: null,
  loading: false,
  success: false,
  error: null,
};

// Fetch user data
export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async (token, thunkAPI) => {
    const userData = await userService.getUserData(token);

    if (userData.error) {
      return thunkAPI.rejectWithValue(userData.error.message);
    }

    return userData.user;
  },
);

// Update user data
export const updateUserData = createAsyncThunk(
  'user/updateUserData',
  async (data, thunkAPI) => {
    const userData = await userService.updateUserData(data.user, data.token);

    if (userData.error) {
      return thunkAPI.rejectWithValue(userData.error.message);
    }

    return userData.user;
  },
);

// Delete user data
export const deleteUserData = createAsyncThunk(
  'user/deleteUserData',
  async (token, thunkAPI) => {
    const userData = await userService.deleteUserData(token);

    if (userData.error) {
      return thunkAPI.rejectWithValue(userData.error.message);
    }

    return userData;
  },
);

// User slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUser: (state) => {
      state.userData = null;
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
      state.success = true;
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    });
    builder.addCase(updateUserData.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(updateUserData.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
      state.success = true;
    });
    builder.addCase(updateUserData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    });
    builder.addCase(deleteUserData.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(deleteUserData.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
      state.success = true;
    });
    builder.addCase(deleteUserData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    });
  },
});

// Export reducer
export default userSlice.reducer;

// Export actions
export const { resetUser } = userSlice.actions;
