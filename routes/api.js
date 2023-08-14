const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// router.get('/', (req, res) => {
//     res.render('home');
//   });


router.get('/', dataController.getData);
router.get('/data/:id', dataController.fetchData);
router.post('/add', dataController.addData);
router.post('/send', dataController.sendEmail);
router.get('/delete/:id', dataController.deleteData);
router.put('/update/:id', dataController.updateData);

  

module.exports = router;
