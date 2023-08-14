const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// router.get('/', (req, res) => {
//     res.render('home');
//   });


router.get('/', dataController.getData);
router.post('/add', dataController.addData);
router.post('/send', dataController.sendEmail);

  

module.exports = router;
