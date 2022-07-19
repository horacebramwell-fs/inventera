const { Formula, Unit } = require('../../db/models');
const { v4: uuidv4 } = require('uuid');
const { CustomError } = require('../utils/errors');

// GET /api/formulas
exports.getAll = async (req, res, next) => {
  try {
    const formulas = await Formula.findAll({
      where: { userId: req.user.id },
      include: [{ model: Unit, as: 'unit' }],
    });

    res.status(200).json({
      status: 'success',
      message: 'Formulas retrieved successfully',
      formulas,
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/formulas/:id
exports.getOne = async (req, res, next) => {
  try {
    const formula = await Formula.findByPk(req.params.id, {
      where: { userId: req.user.id },
      include: [{ model: Unit, as: 'unit' }],
    });

    if (!formula) {
      throw new CustomError('NotFoundError', 404, 'Formula not found');
    }

    res.status(200).json({
      status: 'success',
      message: 'Formula retrieved successfully',
      formula,
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/formulas
exports.create = async (req, res, next) => {
  try {
    const formula = await Formula.create({
      id: uuidv4(),
      ...req.body,
      userId: req.user.id,
    });

    // get the formula just created
    const formulaCreated = await Formula.findByPk(formula.id, {
      where: { userId: req.user.id },
      include: [{ model: Unit, as: 'unit' }],
    });

    res.status(201).json({
      status: 'success',
      message: 'Formula created successfully',
      formula: formulaCreated,
    });
  } catch (error) {
    next(error);
  }
};

// PUT /api/formulas/:id
exports.update = async (req, res, next) => {
  try {
    const formula = await Formula.findByPk(req.params.id, {
      where: { userId: req.user.id },
      include: [{ model: Unit, as: 'unit' }],
    });

    await formula.update(req.body);

    res.status(200).json({
      status: 'success',
      message: 'Formula updated successfully',
      formula,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/formulas/:id
exports.deleteOne = async (req, res, next) => {
  try {
    const formula = await Formula.findByPk(req.params.id, {
      where: { userId: req.user.id },
    });

    await formula.destroy();

    res.status(200).json({
      status: 'success',
      message: 'Formula deleted successfully',
      formula,
    });
  } catch (error) {
    next(error);
  }
};
