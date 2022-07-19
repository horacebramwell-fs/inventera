import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productionService from './productionService';

/* INITIAL STATE */
const initialState = {
  productions: [],
  production: {},
  loading: false,
  error: false,
  success: false,
  message: null,
};

/* GET ALL PRODUCTIONS */
export const getProductions = createAsyncThunk(
  'production/getProductions',
  async (token, thunkAPI) => {
    const productions = await productionService.getProductions(token);

    if (productions.error) {
      return thunkAPI.rejectWithValue(productions.error.message);
    }

    return productions.productions;
  },
);

/* GET PRODUCTION BY ID */
export const getProductionById = createAsyncThunk(
  'production/getProductionById',
  async (data, thunkAPI) => {
    const { id, token } = data;

    const production = await productionService.getProductionById(token, id);

    if (production.error) {
      return thunkAPI.rejectWithValue(production.error.message);
    }

    return production.production;
  },
);

/* CREATE PRODUCTION */
export const createProduction = createAsyncThunk(
  'production/createProduction',
  async (data, thunkAPI) => {
    const { token, production } = data;

    const newProduction = await productionService.createProduction(
      token,
      production,
    );

    if (newProduction.error) {
      return thunkAPI.rejectWithValue(newProduction.error.message);
    }

    return newProduction.production;
  },
);

/* UPDATE PRODUCTION */
export const updateProduction = createAsyncThunk(
  'production/updateProduction',
  async (data, thunkAPI) => {
    const { token, id, production } = data;

    const updatedProduction = await productionService.updateProduction(
      token,
      id,
      production,
    );

    if (updatedProduction.error) {
      return thunkAPI.rejectWithValue(updatedProduction.error.message);
    }

    return updatedProduction.production;
  },
);

/* DELETE PRODUCTION */
export const deleteProduction = createAsyncThunk(
  'production/deleteProduction',
  async (data, thunkAPI) => {
    const { token, id } = data;

    const deletedProduction = await productionService.deleteProduction(
      token,
      id,
    );

    if (deletedProduction.error) {
      return thunkAPI.rejectWithValue(deletedProduction.error.message);
    }

    return deletedProduction.production;
  },
);

/* PRODUCTION SLICE */
const productionSlice = createSlice({
  name: 'production',
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = false;
      state.success = false;
      state.message = null;
    },
    setProduction: (state, action) => {
      state.production = action.payload;
    },
    resetProductions: (state) => {
      state.productions = [];
      state.production = {};
      state.loading = false;
      state.error = false;
      state.success = false;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductions.pending, (state) => {
      state.loading = true;
      state.error = false;
      state.success = false;
      state.message = null;
    });
    builder.addCase(getProductions.fulfilled, (state, action) => {
      state.productions = action.payload;
      state.loading = false;
      state.error = false;
      state.success = true;
      state.message = null;
    });
    builder.addCase(getProductions.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.success = false;
      state.message = action.payload;
    });
    builder.addCase(getProductionById.pending, (state) => {
      state.loading = true;
      state.error = false;
      state.success = false;
      state.message = null;
    });
    builder.addCase(getProductionById.fulfilled, (state, action) => {
      state.production = action.payload;
      state.loading = false;
      state.error = false;
      state.success = true;
      state.message = null;
    });
    builder.addCase(getProductionById.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.success = false;
      state.message = action.payload;
    });
    builder.addCase(createProduction.pending, (state) => {
      state.loading = true;
      state.error = false;
      state.success = false;
      state.message = null;
    });
    builder.addCase(createProduction.fulfilled, (state, action) => {
      state.productions.push(action.payload);
      state.loading = false;
      state.error = false;
      state.success = true;
      state.message = 'Production created successfully';
    });
    builder.addCase(createProduction.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.success = false;
      state.message = action.payload;
    });
    builder.addCase(updateProduction.pending, (state) => {
      state.loading = true;
      state.error = false;
      state.success = false;
      state.message = null;
    });
    builder.addCase(updateProduction.fulfilled, (state, action) => {
      state.productions = state.productions.map((production) => {
        if (production.id === action.payload.id) {
          return action.payload;
        }
        return production;
      });
      state.production = action.payload;
      state.loading = false;
      state.error = false;
      state.success = true;
      state.message = 'Production updated successfully';
    });
    builder.addCase(updateProduction.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.success = false;
      state.message = action.payload;
    });
    builder.addCase(deleteProduction.pending, (state) => {
      state.loading = true;
      state.error = false;
      state.success = false;
      state.message = null;
    });
    builder.addCase(deleteProduction.fulfilled, (state, action) => {
      state.productions = state.productions.filter(
        (production) => production.id !== action.payload.id,
      );
      state.loading = false;
      state.error = false;
      state.success = true;
      state.message = 'Production deleted successfully';
    });
    builder.addCase(deleteProduction.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.success = false;
      state.message = action.payload;
    });
  },
});

export const { reset, setProduction, resetProductions } =
  productionSlice.actions;

export default productionSlice.reducer;
