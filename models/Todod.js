
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  taskName: { type: String, required: true },
  startDate: { type: Date },
  finishDate: { type: Date },
  TodoList: { type: mongoose.Schema.Types.ObjectId, ref: 'Todo', required: true },
});

module.exports = mongoose.model('Task', TaskSchema);
