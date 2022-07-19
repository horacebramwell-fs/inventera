import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import supplierService from './supplierService';

const initialState = {
  suppliers: [],
  supplier: {},
  loading: false,
  error: null,
  success: null,
};

/* GET SUPPLIERS */
export const getSuppliers = createAsyncThunk(
  'supplier/getSuppliers',
  async (token, thunkAPI) => {
    const suppliers = await supplierService.getSuppliers(token);

    if (suppliers.error) {
      return thunkAPI.rejectWithValue(suppliers.error);
    }

    return suppliers.suppliers;
  },
);

/* GET SUPPLIER */
export const getSupplier = createAsyncThunk(
  'supplier/getSupplier',
  async (data, thunkAPI) => {
    const { supplierId } = data;
    const { token } = data;

    const supplier = await supplierService.getSupplier(token, supplierId);

    if (supplier.error) {
      return thunkAPI.rejectWithValue(supplier.error.message);
    }

    return supplier.supplier;
  },
);

/* CREATE SUPPLIER */
export const createSupplier = createAsyncThunk(
  'supplier/createSupplier',
  async (data, thunkAPI) => {
    const { supplier } = data;
    const { token } = data;

    const newSupplier = await supplierService.createSupplier(token, supplier);

    if (newSupplier.error) {
      return thunkAPI.rejectWithValue(newSupplier.error.message);
    }

    return newSupplier.supplier;
  },
);

/* UPDATE SUPPLIER */
export const updateSupplier = createAsyncThunk(
  'supplier/updateSupplier',
  async (data, thunkAPI) => {
    const { supplierId, supplier } = data;
    const { token } = data;

    const newSupplier = await supplierService.updateSupplier(
      token,
      supplierId,
      supplier,
    );

    if (newSupplier.error) {
      return thunkAPI.rejectWithValue(newSupplier.error.message);
    }

    return newSupplier.supplier;
  },
);

/* DELETE SUPPLIER */
export const deleteSupplier = createAsyncThunk(
  'supplier/deleteSupplier',
  async (data, thunkAPI) => {
    const { supplierId } = data;
    const { token } = data;

    const supplier = await supplierService.deleteSupplier(token, supplierId);

    if (supplier.error) {
      return thunkAPI.rejectWithValue(supplier.error.message);
    }

    return supplier.supplier;
  },
);

/* SUPPLIER SLICE */
const supplierSlice = createSlice({
  name: 'supplier',
  initialState,
  reducers: {
    setSuppliers: (state, action) => {
      state.suppliers.push(action.payload);
    },
    resetSuppliers: (state) => {
      state.suppliers = [];
      state.supplier = {};
      state.loading = false;
      state.error = null;
      state.success = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSuppliers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSuppliers.fulfilled, (state, action) => {
      state.suppliers = action.payload;
      state.loading = false;
    });
    builder.addCase(getSuppliers.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(getSupplier.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSupplier.fulfilled, (state, action) => {
      state.supplier = action.payload;
      state.loading = false;
    });
    builder.addCase(getSupplier.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(createSupplier.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createSupplier.fulfilled, (state, action) => {
      state.suppliers.push(action.payload);
      state.supplier = action.payload;
      state.loading = false;
    });
    builder.addCase(createSupplier.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(updateSupplier.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateSupplier.fulfilled, (state, action) => {
      state.supplier = action.payload;
      state.loading = false;
    });
    builder.addCase(updateSupplier.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(deleteSupplier.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteSupplier.fulfilled, (state, action) => {
      state.supplier = action.payload;
      state.loading = false;
    });
    builder.addCase(deleteSupplier.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const { setSuppliers, resetSuppliers } = supplierSlice.actions;

export default supplierSlice.reducer;
