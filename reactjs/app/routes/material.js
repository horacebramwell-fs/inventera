const router = require('express').Router();
const { getAll, getOne, create, update, deleteOne } = require('../controllers/material');

router.get('/', getAll);
router.post('/', create);
router.get('/:id', getOne);
router.put('/:id', update);
router.delete('/:id', deleteOne);

module.exports = router;
