const mongoose = require('mongoose');

const dbURL = 'mongodb://localhost:27018/users';

mongoose.connect(dbURL);

const userSchema = mongoose.Schema({
  image: String,
  name: String,
  username: String,
  email : String
});


module.exports = mongoose.model("user",userSchema);