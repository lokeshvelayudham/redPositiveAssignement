const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');


router.get('/',dataController.home);
router.get('/', dataController.getData);
router.post('/data', dataController.addData);
router.put('/data/:id',dataController.updateData);
router.delete('/data/:id',dataController.deleteData);

module.exports = router;
