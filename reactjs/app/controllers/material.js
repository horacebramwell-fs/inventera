const { Material, Category, Supplier, Unit } = require('../../db/models');
const { v4: uuidv4 } = require('uuid');
const { CustomError } = require('../utils/errors');

// GET /api/materials
exports.getAll = async (req, res, next) => {
  try {
    const materials = await Material.findAll({
      where: { userId: req.user.id },
      include: [
        { model: Category, as: 'category' },
        { model: Supplier, as: 'supplier' },
        { model: Unit, as: 'unit' },
      ],
    });

    res.status(200).json({
      status: 'success',
      message: 'Materials retrieved successfully',
      materials,
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/materials/:id
exports.getOne = async (req, res, next) => {
  try {
    const material = await Material.findByPk(req.params.id, {
      where: { userId: req.user.id },
      include: [
        { model: Category, as: 'category' },
        { model: Supplier, as: 'supplier' },
        { model: Unit, as: 'unit' },
      ],
    });

    if (!material) {
      throw new CustomError('NotFoundError', 404, 'Material not found');
    }

    res.status(200).json({
      status: 'success',
      message: 'Material retrieved successfully',
      material,
    });
  } catch (err) {
    next(err);
  }
};

// POST /api/materials
exports.create = async (req, res, next) => {
  try {
    // this conditional checks if the req body contains a new category to be created
    if (req.body.category && req.body.category.length !== 0 && !req.body.categoryId) {
      const category = await Category.create({
        name: req.body.category,
        userId: req.user.id,
        id: uuidv4(),
      });

      req.body.categoryId = category.id;
    }

    // this conditional checks if the req body contains a new supplier to be created
    if (req.body.supplier && req.body.supplier.length !== 0 && !req.body.supplierId) {
      const supplier = await Supplier.create({
        name: req.body.supplier,
        userId: req.user.id,
        id: uuidv4(),
      });

      req.body.supplierId = supplier.id;
    }

    // we set th data to be inserted in the database
    const data = {
      id: uuidv4(),
      name: req.body.name,
      stock: Number(req.body.stock),
      minStock: Number(req.body.minStock),
      categoryId: req.body.categoryId,
      supplierId: req.body.supplierId,
      unitId: req.body.unitId,
      unitCost: Number(req.body.unitCost),
      lastOrdered: req.body.lastOrdered,
      sku: req.body.sku,
      userId: req.user.id,
    };

    // create the material
    const material = await Material.create(data);

    // get the material we just created to return it
    const createdMaterial = await Material.findByPk(material.id, {
      where: { userId: req.user.id },
      include: [
        { model: Category, as: 'category' },
        { model: Supplier, as: 'supplier' },
        { model: Unit, as: 'unit' },
      ],
    });

    res.status(201).json({
      status: 'success',
      message: 'Material created successfully',
      material: createdMaterial,
    });
  } catch (err) {
    next(err);
  }
};

// PUT /api/materials/:id
exports.update = async (req, res, next) => {
  try {
    if (req.body.category && req.body.category.length !== 0 && !req.body.categoryId) {
      const category = await Category.create({
        name: req.body.category,
        userId: req.user.id,
        id: uuidv4(),
      });

      req.body.category = category.id;
    }

    if (req.body.supplier && req.body.supplier.length !== 0 && !req.body.supplierId) {
      const supplier = await Supplier.create({
        name: req.body.supplier,
        userId: req.user.id,
        id: uuidv4(),
      });

      req.body.supplier = supplier.id;
    }

    const data = {
      name: req.body.name,
      stock: Number(req.body.stock),
      minStock: Number(req.body.minStock),
      categoryId: req.body.categoryId || req.body.category,
      supplierId: req.body.supplierId || req.body.supplier,
      unitId: req.body.unitId,
      unitCost: Number(req.body.unitCost),
      lastOrdered: req.body.lastOrdered,
      sku: req.body.sku,
    };

    const material = await Material.findByPk(req.params.id, {
      where: { userId: req.user.id },
    });

    await material.update(data);

    const updatedMaterial = await Material.findByPk(req.params.id, {
      where: { userId: req.user.id },
      include: [
        { model: Category, as: 'category' },
        { model: Supplier, as: 'supplier' },
        { model: Unit, as: 'unit' },
      ],
    });

    res.status(200).json({
      status: 'success',
      message: 'Material updated successfully',
      material: updatedMaterial,
    });
  } catch (err) {
    next(err);
  }
};

// DELETE /api/materials/:id
exports.deleteOne = async (req, res, next) => {
  try {
    console.log(req.body);
    const material = await Material.findByPk(req.params.id, {
      where: { userId: req.user.id },
    });

    await material.destroy();

    res.status(200).json({
      status: 'success',
      message: 'Material deleted successfully',
      material,
    });
  } catch (err) {
    next(err);
  }
};
