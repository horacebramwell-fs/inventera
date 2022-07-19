import axios from 'axios';

const BASE_URL = '/api/productions';

// Get all productions
const getProductions = async (token) => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Get production by id
const getProductionById = async (token, id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Create production
const createProduction = async (token, production) => {
  try {
    const response = await axios.post(BASE_URL, production, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Update production
const updateProduction = async (token, id, production) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, production, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Delete production
const deleteProduction = async (token, id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const productionService = {
  getProductions,
  getProductionById,
  createProduction,
  updateProduction,
  deleteProduction,
};

export default productionService;
