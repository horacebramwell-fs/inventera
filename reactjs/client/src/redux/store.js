import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import userReducer from './features/user/userSlice';
import unitReducer from './features/unit/unitSlice';
import productionBoardReducer from './features/productionBoard/productionBoardSlice';
import materialReducer from './features/material/materialSlice';
import categoryReducer from './features/category/categorySlice';
import supplierReducer from './features/supplier/supplierSlice';
import productReducer from './features/product/productSlice';
import formulaReducer from './features/formula/formulaSlice';
import productionReducer from './features/production/productionSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    unit: unitReducer,
    board: productionBoardReducer,
    material: materialReducer,
    category: categoryReducer,
    supplier: supplierReducer,
    product: productReducer,
    formula: formulaReducer,
    production: productionReducer,
  },
});
