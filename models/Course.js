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
  weeks: {
    type: String,
    required: [true, 'Please add number of weeks for course']
  },
  tuition: {
    type: Number,
    required: [true, 'Please add cost of tuition']
  },
  minimumSkill: {
    type: String,
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
  },
  bootcamp: {
    type: mongoose.Schema.ObjectId,
    ref: 'Bootcamp',
    required: true
  }
});

CourseSchema.statics.getAverageCost = async function(bootcampId) {
  console.log('Calculating avg cost'.blue);

  const averageCostObj = await this.aggregate([
    {
      $match: { bootcamp: bootcampId }
    },
    {
      $group: {
        _id: '$bootcamp',
        averageCost: { $avg: '$tuition' }
      }
    }
  ]);

  console.log(averageCostObj);
};

CourseSchema.post('save', function() {
  this.constructor.getAverageCost(this.bootcamp);
});

CourseSchema.pre('remove', function() {
  this.constructor.getAverageCost(this.bootcamp);
});

module.exports = mongoose.model('Course', CourseSchema);
