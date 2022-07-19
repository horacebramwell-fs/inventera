import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import unitService from './unitService';

const initialState = {
  units: [],
  loading: false,
  success: false,
  error: null,
};

// Get all units
export const fetchUnits = createAsyncThunk(
  'units/fetchUnits',
  async (token, thunkAPI) => {
    const data = await unitService.getUnits(token);

    if (data.error) {
      return thunkAPI.rejectWithValue(data.error.message);
    }

    return data.units;
  },
);

// Unit Slice
const unitSlice = createSlice({
  name: 'units',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUnits.pending, (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(fetchUnits.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.units = action.payload;
    });
    builder.addCase(fetchUnits.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    });
  },
});

export default unitSlice.reducer;
