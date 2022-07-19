const router = require('express').Router();
const { getOne, upload } = require('../controllers/avatar');

router.get('/', getOne);
router.post('/', upload);

module.exports = router;
