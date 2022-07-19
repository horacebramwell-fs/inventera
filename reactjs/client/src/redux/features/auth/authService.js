import axios from 'axios';

const BASE_URL = '/api/auth/';

// Register user
const register = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}register`, userData);

    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

// Login user
const login = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}login`, userData);

    if (response.data) {
      localStorage.user = JSON.stringify(response.data);
    }

    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

// Logout user
const logout = async () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
