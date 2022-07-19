const { Category } = require('../../db/models');
const { v4: uuidv4 } = require('uuid');
const { CustomError } = require('../utils/errors');

// GET /api/categories
exports.getAll = async (req, res, next) => {
  try {
    // Checks for categories that belong to the user
    const categories = await Category.findAll({
      where: {
        userId: req.user.id,
      },
    });

    res.status(200).json({
      status: 'success',
      message: 'Categories retrieved successfully',
      categories,
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/categories/:id
exports.getOne = async (req, res, next) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      where: { userId: req.user.id },
    });

    if (!category) {
      throw new CustomError('NotFoundError', 404, 'Category not found');
    }

    res.status(200).json({
      status: 'success',
      message: 'Category retrieved successfully',
      category,
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/categories
exports.create = async (req, res, next) => {
  try {
    const { name } = req.body;

    const category = await Category.create({
      name,
      userId: req.user.id,
      id: uuidv4(),
    });

    res.status(201).json({
      status: 'success',
      message: 'Category created successfully',
      category,
    });
  } catch (error) {
    next(error);
  }
};

// PUT /api/categories/:id
exports.update = async (req, res, next) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      where: { userId: req.user.id },
    });

    await category.update(req.body);

    res.status(200).json({
      status: 'success',
      message: 'Category updated successfully',
      category,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/categories/:id
exports.deleteOne = async (req, res, next) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      where: { userId: req.user.id },
    });

    await category.destroy();

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
