import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import formulaService from './formulaService';

/* INITIAL STATE */
const initialState = {
  formulas: [],
  formula: {},
  loading: false,
  error: null,
  success: false,
  message: null,
};

/* GET FORMULAS */
export const getFormulas = createAsyncThunk(
  'formula/getFormulas',
  async (token, thunkAPI) => {
    const formulas = await formulaService.getFormulas(token);

    if (formulas.error) {
      return thunkAPI.rejectWithValue(formulas.error.message);
    }

    return formulas.formulas;
  },
);

/* GET FORMULA */
export const getFormula = createAsyncThunk(
  'formula/getFormula',
  async (data, thunkAPI) => {
    const { formulaId } = data;
    const { token } = data;

    const formula = await formulaService.getFormula(token, formulaId);

    if (formula.error) {
      return thunkAPI.rejectWithValue(formula.error.message);
    }

    return formula.formula;
  },
);

/* CREATE FORMULA */
export const createFormula = createAsyncThunk(
  'formula/createFormula',
  async (data, thunkAPI) => {
    const { formula } = data;
    const { token } = data;

    const newFormula = await formulaService.createFormula(token, formula);

    if (newFormula.error) {
      return thunkAPI.rejectWithValue(newFormula.error.message);
    }

    return newFormula.formula;
  },
);

/* UPDATE FORMULA */
export const updateFormula = createAsyncThunk(
  'formula/updateFormula',
  async (data, thunkAPI) => {
    const { formulaId, formula } = data;
    const { token } = data;

    const updatedFormula = await formulaService.updateFormula(
      token,
      formulaId,
      formula,
    );

    if (updatedFormula.error) {
      return thunkAPI.rejectWithValue(updatedFormula.error.message);
    }

    return updatedFormula.formula;
  },
);

/* DELETE FORMULA */
export const deleteFormula = createAsyncThunk(
  'formula/deleteFormula',
  async (data, thunkAPI) => {
    const { formulaId } = data;
    const { token } = data;

    const deletedFormula = await formulaService.deleteFormula(token, formulaId);

    if (deletedFormula.error) {
      return thunkAPI.rejectWithValue(deletedFormula.error.message);
    }

    return deletedFormula.formula;
  },
);

/* FORMULA SLICE */
const formulaSlice = createSlice({
  name: 'formula',
  initialState,
  reducers: {
    reset: (state) => {
      state.error = null;
      state.loading = false;
      state.success = false;
      state.message = '';
    },
    setFormulas: (state, action) => {
      state.formulas = action.payload;
    },
    setFormula: (state, action) => {
      state.formula = action.payload;
    },
    resetFormulas: (state) => {
      state.formulas = [];
      state.formula = {};
      state.loading = false;
      state.error = null;
      state.success = false;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFormulas.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getFormulas.fulfilled, (state, action) => {
      state.formulas = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getFormulas.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(getFormula.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getFormula.fulfilled, (state, action) => {
      state.formula = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getFormula.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.success = false;
    });
    builder.addCase(createFormula.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createFormula.fulfilled, (state, action) => {
      state.formulas.push(action.payload);
      state.loading = false;
      state.error = null;
      state.success = true;
      state.message = 'Formula created successfully';
    });
    builder.addCase(createFormula.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(updateFormula.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateFormula.fulfilled, (state, action) => {
      const index = state.formulas.findIndex(
        (formula) => formula.id === action.payload.id,
      );
      state.formulas[index] = action.payload;
      state.loading = false;
      state.error = null;
      state.success = true;
      state.message = 'Formula updated successfully';
    });
    builder.addCase(updateFormula.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(deleteFormula.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteFormula.fulfilled, (state, action) => {
      const index = state.formulas.findIndex(
        (formula) => formula.id === action.payload.id,
      );
      state.formulas.splice(index, 1);
      state.loading = false;
      state.error = null;
      state.success = true;
      state.message = 'Formula deleted successfully';
    });
    builder.addCase(deleteFormula.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const { reset, setFormula, setFormulas, resetFormulas } =
  formulaSlice.actions;

export default formulaSlice.reducer;
