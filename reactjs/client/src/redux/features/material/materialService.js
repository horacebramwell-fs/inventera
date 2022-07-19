import axios from 'axios';

const BASE_URL = '/api/materials';

// Get Materials
const getMaterials = async (token) => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

// Get Material
const getMaterial = async (token, materialId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${materialId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

// Create Material
const createMaterial = async (token, material) => {
  try {
    const response = await axios.post(BASE_URL, material, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

// Update Material
const updateMaterial = async (token, materialId, material) => {
  try {
    const response = await axios.put(`${BASE_URL}/${materialId}`, material, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

// Delete Material
const deleteMaterial = async (token, materialId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${materialId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

const materialService = {
  getMaterials,
  getMaterial,
  createMaterial,
  updateMaterial,
  deleteMaterial,
};

export default materialService;
