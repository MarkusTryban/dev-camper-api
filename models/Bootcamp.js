const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Please enter a name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Name can be no more than 50 characters']
  },
  slug: String,
  description: {
    type: String,
    require: [true, 'Please enter a description'],
    maxlength: [500, 'Description can be no more than 500 characters']
  },
  website: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Please use a valid URL with HTTP or HTTPS'
    ]
  }
});
