const router = require('express').Router();
const { verifyToken } = require('../controllers/token');

router.post('/', verifyToken);

module.exports = router;
