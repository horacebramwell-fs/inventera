import axios from 'axios';

const BASE_URL = '/api/categories';

// Get categories
const getCategories = async (token) => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Get category
const getCategory = async (token, categoryId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${categoryId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Create category
const createCategory = async (token, category) => {
  try {
    const response = await axios.post(BASE_URL, category, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Update category
const updateCategory = async (token, categoryId, category) => {
  try {
    const response = await axios.put(`${BASE_URL}/${categoryId}`, category, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Delete category
const deleteCategory = async (token, categoryId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${categoryId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const categoryService = {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};

export default categoryService;
