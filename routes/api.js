const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// router.get('/', (req, res) => {
//     res.render('home');
//   });


router.get('/', dataController.getData);
router.get('/data/:id', dataController.fetchData);
router.post('/add', dataController.addData);
router.get('/delete/:id', dataController.deleteData);
router.put('/update/:id', dataController.updateData);
router.post('/send-email', dataController.sendEmail);

  

module.exports = router;
