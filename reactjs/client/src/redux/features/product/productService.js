import axios from 'axios';

const BASE_URL = '/api/products';

// Get all products
const getProducts = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Get product by id
const getProduct = async (token, productId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Create product
const createProduct = async (token, product) => {
  try {
    const response = await axios.post(`${BASE_URL}`, product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Update product
const updateProduct = async (token, productId, product) => {
  try {
    const response = await axios.put(`${BASE_URL}/${productId}`, product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Delete product
const deleteProduct = async (token, productId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const productService = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};

export default productService;
