const { Product, Unit, Category } = require('../../db/models');
const { v4: uuidv4 } = require('uuid');
const { CustomError } = require('../utils/errors');

// GET /api/products
exports.getAll = async (req, res, next) => {
  try {
    const products = await Product.findAll({
      where: { userId: req.user.id },
      include: [
        { model: Unit, as: 'unit' },
        { model: Category, as: 'category' },
      ],
    });

    res.status(200).json({
      status: 'success',
      message: 'Products retrieved successfully',
      products,
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/products/:id
exports.getOne = async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      where: { userId: req.user.id },
      include: [
        { model: Unit, as: 'unit' },
        { model: Category, as: 'category' },
      ],
    });

    if (!product) {
      throw new CustomError('NotFoundError', 404, 'Product not found');
    }

    res.status(200).json({
      status: 'success',
      message: 'Product retrieved successfully',
      product,
    });
  } catch (err) {
    next(err);
  }
};

// POST /api/products
exports.create = async (req, res, next) => {
  try {
    // checks if the req body contains a new category to be created
    if (req.body.category && req.body.category.length !== 0 && !req.body.categoryId) {
      const category = await Category.create({
        id: uuidv4(),
        name: req.body.category,
        userId: req.user.id,
      });

      req.body.categoryId = category.id;
    }

    // sets the data to be inserted
    const data = {
      ...req.body,
      userId: req.user.id,
      id: uuidv4(),
    };

    // creates the product
    const product = await Product.create(data);

    // retrieve the newly created product
    const newProduct = await Product.findByPk(product.id, {
      where: { userId: req.user.id },
      include: [
        { model: Unit, as: 'unit' },
        { model: Category, as: 'category' },
      ],
    });

    res.status(200).json({
      status: 'success',
      message: 'Product created successfully',
      product: newProduct,
    });
  } catch (err) {
    next(err);
  }
};

// PUT /api/products/:id
exports.update = async (req, res, next) => {
  try {
    console.log(req.body);

    if (req.body.category && req.body.category.length !== 0 && !req.body.categoryId) {
      const category = await Category.create({
        id: uuidv4(),
        name: req.body.category,
        userId: req.user.id,
      });

      req.body.categoryId = category.id;
    }

    const data = {
      ...req.body,
      userId: req.user.id,
    };

    const product = await Product.findByPk(req.params.id, {
      where: { userId: req.user.id },
    });

    await product.update(data);

    const updatedProduct = await Product.findByPk(req.params.id, {
      where: { userId: req.user.id },
      include: [
        { model: Unit, as: 'unit' },
        { model: Category, as: 'category' },
      ],
    });

    res.status(200).json({
      status: 'success',
      message: 'Product updated successfully',
      product: updatedProduct,
    });
  } catch (err) {
    next(err);
  }
};

// DELETE /api/products/:id
exports.deleteOne = async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      where: { userId: req.user.id },
    });

    await product.destroy();

    res.status(200).json({
      status: 'success',
      message: 'Product deleted successfully',
      product,
    });
  } catch (err) {
    next(err);
  }
};
