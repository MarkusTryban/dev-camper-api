const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Please enter a name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Name can be no more than 50 char']
  }
});
