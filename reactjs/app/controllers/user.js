const { User } = require('../../db/models');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const { CustomError } = require('../utils/errors');
const { cloudinary } = require('../utils/cloudinary');

// GET /api/user - returns single user object
exports.getOne = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id);

    if (!user) {
      throw new CustomError('UserNotFoundError', 404, 'User not found');
    }

    res.status(200).json({
      status: 'success',
      message: 'User retrieved successfully',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        businessName: user.businessName,
        website: user.website,
        avatarUrl: user.avatarUrl,
      },
    });
  } catch (error) {
    next(error);
  }
};

// PUT /api/user - updates user object
exports.update = async (req, res, next) => {
  try {
    let password;
    let imageUrl = '';

    const user = await User.findByPk(req.user.id);

    const avatarId = user.avatarId || uuidv4();

    if (!user) {
      throw new CustomError('UserNotFoundError', 404, 'User not found');
    }

    const { name, email, password: newPassword, businessName, website, image } = req.body;

    if (newPassword) {
      password = await bcrypt.hash(newPassword, 10);
    }

    if (image) {
      imageUrl = await cloudinary.uploader.upload(
        image,
        {
          public_id: `${avatarId}`,
          tags: 'profile-image',
          folder: 'avatars',
          transformation: [{ width: 150, height: 150, crop: 'fill' }],
        },
        (err, result) => {
          if (err) {
            throw new CustomError('CloudinaryError', 500, err.message);
          }

          return result.url;
        }
      );
    }

    await user.update({
      name,
      email: email.toLowerCase(),
      password,
      businessName,
      website,
      avatarId,
      avatarUrl: imageUrl.url,
    });

    res.status(200).json({
      status: 'success',
      message: 'User updated successfully',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        businessName: user.businessName,
        website: user.website,
        avatarUrl: user.avatarUrl,
      },
    });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/user - deletes user object
exports.deleteOne = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id);

    if (!user) {
      throw new CustomError('UserNotFoundError', 404, 'User not found');
    }

    await user.destroy();

    res.status(200).json({
      status: 'success',
      message: 'User deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
