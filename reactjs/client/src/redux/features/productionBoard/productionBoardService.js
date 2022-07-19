import axios from 'axios';

const BASE_URL = '/api/boards';

// get all boards
const fetchBoards = async (token) => {
  try {
    const res = await axios.get(BASE_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    return err.response.data;
  }
};

const productionBoardService = {
  fetchBoards,
};

export default productionBoardService;
