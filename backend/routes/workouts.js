const express = require("express")
const {getWorkouts, getWorkout, createWorkout, deleteWorkout, editWorkout} = require("../controllers/workoutController")

const router = express.Router()



router.get("/", getWorkouts)
router.get("/:id", getWorkout)
router.post("/", createWorkout)
router.delete("/:id", deleteWorkout)
router.patch("/:id", editWorkout)

module.exports = router