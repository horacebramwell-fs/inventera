import axios from 'axios';

const BASE_URL = '/api/units';

const getUnits = async (token) => {
  try {
    const res = await axios.get(BASE_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

const unitService = {
  getUnits,
};

export default unitService;
