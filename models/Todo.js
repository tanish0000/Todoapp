const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  text: { type: String, required: true },
  startdate: { type: String },
});
const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  tasks:[
taskSchema
  ]

});

module.exports = new mongoose.model("Todo", TodoSchema);
