import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productionBoardService from './productionBoardService';

const initialState = {
  boards: [],
  loading: false,
  error: null,
  success: false,
};

/* GET PRODUCTION BOARDS */
export const fetchBoards = createAsyncThunk(
  'productionBoard/fetchBoards',
  async (token, thunkAPI) => {
    const data = await productionBoardService.fetchBoards(token);

    if (data.error) {
      return thunkAPI.rejectWithValue(data.error.message);
    }

    return data.boards;
  },
);

/* PRODUCTION BOARD SLICE */
const productionBoardSlice = createSlice({
  name: 'productionBoard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBoards.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBoards.fulfilled, (state, action) => {
      state.boards = action.payload;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(fetchBoards.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
  },
});

export default productionBoardSlice.reducer;
