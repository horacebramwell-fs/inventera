const { CustomError } = require('../utils/errors');
const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  const { token } = req.body;

  if (!token) {
    throw new CustomError('InvalidToken', 401, 'Token not provided');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      throw new CustomError('InvalidToken', 401, 'Token is invalid');
    }

    // if everything is good, send the token back to the client for use
    res.status(200).json({
      status: 'success',
      message: 'Token is valid',
      token: token,
    });
  } catch (err) {
    next(err);
  }
};
