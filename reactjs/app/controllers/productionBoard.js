const { ProductionBoard } = require('../../db/models');

exports.getAll = async (req, res, next) => {
  try {
    const boards = await ProductionBoard.findAll({
      attributes: ['id', 'name', 'status'],
    });
    res.status(200).json({
      status: 'success',
      message: 'Production boards retrieved successfully',
      boards,
    });
  } catch (err) {
    next(err);
  }
};
