const User = require('../models/User');
const Product = require("../models/Product");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: user });
  }
  catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    console.log(user);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const token = jwt.sign({ userId: user._id }, 'secret-key', { expiresIn: '1h', });
    res.json({ token });
  } catch (error) { res.status(500).json({ error: 'Internal server error' }); }

};

const registerUser = async (req, resp) => { 
  const user = new Product(req.body);
  const result = await user.save();
  console.log(result);
  resp.send(result);

}


module.exports = {
  register,
  login,
  registerUser,
};
