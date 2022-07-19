import axios from 'axios';

const BASE_URL = '/api/formulas';

// get all formulas
const getFormulas = async (token) => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// get a formula
const getFormula = async (token, id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// create a formula
const createFormula = async (token, data) => {
  try {
    const response = await axios.post(BASE_URL, data, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// update a formula
const updateFormula = async (token, id, data) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// delete a formula
const deleteFormula = async (token, id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const formulaService = {
  getFormulas,
  getFormula,
  createFormula,
  updateFormula,
  deleteFormula,
};

export default formulaService;
