const router = require("express").Router()
const Todo = require("../models/Todo");
const Task = require("../models/Todod");

// routes will be here....
router.get("/", async (req, res) => {
  const allTodo = await Todo.find();
  res.render("index", { todo: allTodo });
})
const findthedocumentandinsertthesubdocument = async () => {
}
// router.post('/addtask', async(req, res) => {

//   const { forredirect } = req.body;

//   const { text, startdate} = req.body;
//   console.log(text, startdate);
//   const todo = await Todo.findOne({ forredirect });
//   todo.tasks.push({ text: text, startdate: startdate });
//   await todo.save();
//   console.log(todo);

//   res.redirect(`/todoL/:_id=${forredirect}`);
// })
router.post('/addtask/:id', async (req, res) => {
  const todoId = req.params.id;
  const { text, startdate } = req.body;

  try {
    const todo = await Todo.findById(todoId);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    todo.tasks.push({ text: text, startdate: startdate });
    await todo.save();

    res.redirect(`/todoL/${todoId}`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.post('/deletetask/:todoId/:taskId', async (req, res) => {
  const { todoId, taskId } = req.params;

  try {
    const todo = await Todo.findById(todoId);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    todo.tasks.id(taskId).remove();
    await todo.save();

    res.redirect(`/todoL/${todoId}`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;






// const mongoose = require("mongoose");

// // Assuming you have the _id of the Todo document and the _id of the task subdocument you want to update
// const todoId = "your_todo_document_id"; // Replace with the actual Todo document _id
// const taskId = "your_task_subdocument_id"; // Replace with the actual task subdocument _id

// // The new values you want to update
// const updatedTaskValues = {
//   taskName: "Updated Task",
//   startDate: new Date(),
//   finishDate: new Date(),
// };

// // Use findOneAndUpdate to update the task subdocument
