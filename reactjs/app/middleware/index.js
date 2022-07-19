const jwt = require('jsonwebtoken');
const { CustomError } = require('../utils/errors');

exports.authenticate = (req, res, next) => {
  try {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      throw new CustomError('AuthenticationError', 401, 'You are not authorized');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      throw new CustomError('AuthenticationError', 401, 'You are not authorized');
    }

    req.user = decoded;

    next();
  } catch (error) {
    next(error);
  }
};
