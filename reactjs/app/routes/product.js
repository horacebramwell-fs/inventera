const router = require('express').Router();
const { getAll, getOne, create, update, deleteOne } = require('../controllers/product');

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deleteOne);

module.exports = router;
