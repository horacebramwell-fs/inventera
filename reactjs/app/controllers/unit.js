const { Unit } = require('../../db/models');

exports.getAll = async (req, res, next) => {
  try {
    const units = await Unit.findAll({
      attributes: ['id', 'name', 'abbr'],
    });

    res.status(200).json({
      status: 'success',
      message: 'Units retrieved successfully',
      units,
    });
  } catch (err) {
    next(err);
  }
};
