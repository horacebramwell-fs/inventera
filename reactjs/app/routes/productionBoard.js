const router = require('express').Router();
const { getAll } = require('../controllers/productionBoard');

router.get('/', getAll);

module.exports = router;
