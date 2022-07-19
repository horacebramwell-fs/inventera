const router = require('express').Router();
const { getOne, update, deleteOne } = require('../controllers/user');

router.get('/', getOne);
router.put('/', update);
router.delete('/', deleteOne);

module.exports = router;
