const Data = require('../models/Data');
const nodemailer = require('nodemailer');


exports.addData = async (req, res) => {
  const { name, phoneNumber, email, hobbies } = req.body;

  const newData = new Data({
    name,
    phoneNumber,
    email,
    hobbies,
  });

  try {
    await newData.save();
    res.redirect('/');
  } catch (error) {
    res.send('Error saving data');
  }
};


// exports.getData = async (req, res) => {
//     try {
//       const temporaryData = [
//         { _id: 1, name: 'John', phoneNumber: '123456789', email: 'john@example.com', hobbies: 'Reading' },
//         // Add more test data
//       ];
//       res.render('home', { data: temporaryData });
//     } catch (error) {
//       res.send('Error fetching data');
//     }
//   };

// get data

exports.getData = async (req, res) => {
    try {
      const allData = await Data.find();
      console.log(allData)
      res.render('home', { data: allData });
    } catch (error) {
      res.send('Error fetching data from mongodb');
    }
  };

// delete data

module.exports.deleteData = async (req, res) => {
  const { id } = req.params;

  try {
    await Data.findByIdAndDelete({_id: id});
    res.redirect('/');
    console.log('Data Deleted Sucessfully')
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};




// fetch data
module.exports.fetchData = async(req, res) => {
  const { id } = req.params;
  try {
    const allData = await Data.findById(id)
    console.log(allData)
    res.json({ data: allData })
    // res.render('home', { data: allData });
  } catch (error) {
    res.send('Error fetching data after saving');
  }
};




  // update data
exports.updateData = async (req, res) => {
  const { id } = req.params;
  const { name, phoneNumber, email, hobbies } = req.body;

  try {
    const updatedData = await Data.findByIdAndUpdate(
      id,
      { name, phoneNumber, email, hobbies },
      { new: true }
    );
    // res.redirect('/')
    // res.redirect(req.get('referer'));
    res.json(updatedData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.sendEmail = async (req, res) => {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'test.lokesh.velayudham@gmail.com',
        pass: 'jaralonina',
      },
    });
  
    const mailOptions = {
      from: 'test.lokesh.velayudham@gmail.com',
      to: 'info@redpositive.in',
      subject: 'Data Details',
      text: 'Data details: ...' // You can compose the email text here
    };
  
    try {
      await transporter.sendMail(mailOptions);
      res.redirect('/');
    } catch (error) {
      res.send('Error sending email');
    }
  };
