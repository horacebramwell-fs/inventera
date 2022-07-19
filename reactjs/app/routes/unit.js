const router = require('express').Router();
const { getAll } = require('../controllers/unit');

router.get('/', getAll);

module.exports = router;
