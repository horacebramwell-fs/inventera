const { User } = require('../../db/models');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const { generateToken } = require('../utils/jwt');
const { CustomError } = require('../utils/errors');

// POST /api/auth/login
exports.login = async (req, res, next) => {
  try {
    const email = req.body.email.toLowerCase();
    const password = req.body.password;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new CustomError('NotFoundError', 404, 'Invalid email or password');
    }

    // Check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If password is incorrect, return error message and 401 status code
    if (!isPasswordValid) {
      throw new CustomError('InvalidCredentialsError', 401, 'Invalid email or password');
    }

    // if password is correct, return success message and 200 status code
    res.status(200).json({
      status: 'success',
      message: 'Logged in successfully',
      token: generateToken(user.id),
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/auth/register
exports.register = async (req, res, next) => {
  try {
    const { email, password, name, businessName, website } = req.body;

    const user = await User.findOne({ where: { email } });

    if (user) {
      throw new CustomError('UserAlreadyExistsError', 409, 'Email address already in use');
    }

    // password must be at least 8 characters long, and contain at least one number, one lowercase and one uppercase letter, and one special character
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const errMsg =
      'Password must be at least 8 characters long, and contain at least one number, one lowercase, one uppercase letter, and one special character';

    if (!regex.test(password)) {
      throw new CustomError('InvalidPasswordError', 400, errMsg);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      id: uuidv4(),
      email: email.toLowerCase(),
      password: hashedPassword,
      name,
      businessName,
      website,
      avatarId: uuidv4(),
    });

    res.status(201).json({
      status: 'success',
      message: 'Account created successfully. Please login',
      user: {
        email: newUser.email,
        name: newUser.name,
        businessName: newUser.businessName,
        website: newUser.website,
      },
    });
  } catch (error) {
    next(error);
  }
};
