import axios from 'axios';

const BASE_URL = '/api/suppliers';

// Get suppliers
const getSuppliers = async (token) => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Get supplier
const getSupplier = async (token, supplierId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${supplierId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Create supplier
const createSupplier = async (token, supplier) => {
  try {
    const response = await axios.post(BASE_URL, supplier, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Update supplier
const updateSupplier = async (token, supplierId, supplier) => {
  try {
    const response = await axios.put(`${BASE_URL}/${supplierId}`, supplier, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Delete supplier
const deleteSupplier = async (token, supplierId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${supplierId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const supplierService = {
  getSuppliers,
  getSupplier,
  createSupplier,
  updateSupplier,
  deleteSupplier,
};

export default supplierService;
