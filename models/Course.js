const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Please add a course title']
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  week: {
    type: String,
    required: [true, 'Please add number of weeks for course']
  },
  tuition: {
    type: Number,
    required: [true, 'Please add cost of tuition']
  },
  minSkill: {
    type: Number,
    required: [true, 'Please add skill level needed for course'],
    enum: ['beginner', 'intermediate', 'advanced']
  },
  scholarshipAvailable: {
    type: Boolean,
    default: false
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});
