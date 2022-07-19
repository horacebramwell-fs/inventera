import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import materialService from './materialService';

/* INITIAL STATE */
const initialState = {
  materials: [],
  material: {},
  loading: false,
  success: false,
  error: false,
  message: null,
};

/* GET MATERIALS */
export const getMaterials = createAsyncThunk(
  'material/getMaterials',
  async (token, thunkAPI) => {
    const materials = await materialService.getMaterials(token);

    if (materials.error) {
      return thunkAPI.rejectWithValue(materials.error.message);
    }

    return materials.materials;
  },
);

/* GET MATERIAL */
export const getMaterial = createAsyncThunk(
  'material/getMaterial',
  async (data, thunkAPI) => {
    const { materialId, token } = data;

    const material = await materialService.getMaterial(token, materialId);

    if (material.error) {
      return thunkAPI.rejectWithValue(material.error.message);
    }

    return material.material;
  },
);

/* CREATE MATERIAL */
export const createMaterial = createAsyncThunk(
  'material/createMaterial',
  async (data, thunkAPI) => {
    const { material, token } = data;

    const newMaterial = await materialService.createMaterial(token, material);

    if (newMaterial.error) {
      return thunkAPI.rejectWithValue(newMaterial.error.message);
    }

    return newMaterial.material;
  },
);

/* UPDATE MATERIAL */
export const updateMaterial = createAsyncThunk(
  'material/updateMaterial',
  async (data, thunkAPI) => {
    const { material, materialId, token } = data;

    const updatedMaterial = await materialService.updateMaterial(
      token,
      materialId,
      material,
    );

    if (updatedMaterial.error) {
      return thunkAPI.rejectWithValue(updatedMaterial.error.message);
    }

    return updatedMaterial.material;
  },
);

/* DELETE MATERIAL */
export const deleteMaterial = createAsyncThunk(
  'material/deleteMaterial',
  async (data, thunkAPI) => {
    const { materialId, token } = data;

    const deletedMaterial = await materialService.deleteMaterial(
      token,
      materialId,
    );

    if (deletedMaterial.error) {
      return thunkAPI.rejectWithValue(deletedMaterial.error.message);
    }

    return deletedMaterial.material;
  },
);

/* MATERIAL SLICE */
const materialSlice = createSlice({
  name: 'material',
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.error = false;
      state.message = '';
    },
    setMaterial: (state, action) => {
      state.material = action.payload;
    },
    resetMaterials: (state) => {
      state.materials = [];
      state.material = {};
      state.loading = false;
      state.success = false;
      state.error = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMaterials.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMaterials.fulfilled, (state, action) => {
      state.materials = action.payload;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(getMaterials.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
      state.message = action.payload;
    });
    builder.addCase(getMaterial.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMaterial.fulfilled, (state, action) => {
      state.material = action.payload;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(getMaterial.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
      state.message = action.payload;
    });
    builder.addCase(createMaterial.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createMaterial.fulfilled, (state, action) => {
      state.materials.push(action.payload);
      state.material = action.payload;
      state.loading = false;
      state.success = true;
      state.error = false;
      state.message = 'Material created successfully';
    });
    builder.addCase(createMaterial.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
      state.message = action.payload;
    });
    builder.addCase(updateMaterial.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateMaterial.fulfilled, (state, action) => {
      const index = state.materials.findIndex(
        (material) => material.id === action.payload.id,
      );
      state.materials[index] = action.payload;
      state.loading = false;
      state.success = true;
      state.error = false;
      state.message = 'Material updated successfully';
    });
    builder.addCase(updateMaterial.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
      state.message = action.payload;
    });
    builder.addCase(deleteMaterial.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteMaterial.fulfilled, (state, action) => {
      const index = state.materials.findIndex(
        (material) => material.id === action.payload.id,
      );
      state.materials.splice(index, 1);
      state.loading = false;
      state.success = true;
      state.error = false;
      state.message = 'Material deleted successfully';
    });
    builder.addCase(deleteMaterial.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
      state.message = action.payload;
    });
  },
});

export const { reset, setMaterial, resetMaterials } = materialSlice.actions;

export default materialSlice.reducer;
