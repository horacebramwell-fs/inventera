const jwt = require('jsonwebtoken');
const CustomError = require('./errors');

const generateToken = (id) => {
  try {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
  } catch (error) {
    throw new CustomError('JWTError', 500, 'Error while generating token');
  }
};

module.exports = { generateToken };
