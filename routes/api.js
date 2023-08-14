const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.get('/', (req, res) => {
    res.render('home');
  });


router.post('/add', dataController.addData);
router.post('/send', dataController.sendEmail);
router.get('/', dataController.getData);
  

module.exports = router;
