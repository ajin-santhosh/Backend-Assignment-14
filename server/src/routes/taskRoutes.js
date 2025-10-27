const express = require("express")
const router = express.Router()
const {getTask,createTask,updateTask,deleteTask} = require("../controller/taskController")

router.get('/getTask/:userId',getTask)
router.post('/addTask',createTask)
router.put("/updateTask/:userId/:taskId",updateTask)
router.delete("/deleteTask/:userId/:taskId",deleteTask)
module.exports = router
