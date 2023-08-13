const Data = require('../models/Data');

module.exports.home = function(req, res){
  console.log(req.cookies);
  // res.cookie('user_id', 25);
  return res.render('home', {
      title: "Home"
  });
}

exports.getData = async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
    res.render('index', { datase: data });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.addData = async (req, res) => {
  try {
    const newData = new Data(req.body);
    await newData.save();
    res.json(newData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateData = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const data = await Data.findByIdAndUpdate(id, updatedData, { new: true });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteData = async (req, res) => {
  const { id } = req.params;

  try {
    await Data.findByIdAndDelete(id);
    res.json({ message: 'Data deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};