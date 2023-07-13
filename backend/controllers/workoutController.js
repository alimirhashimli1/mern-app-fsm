


const getWorkouts = (req, res) => {
    res.json({msg: "Get all workouts"})
}

const getWorkout = (req, res) => {
    res.json({msg: "Get specific workout"})
}

const createWorkout = (req, res) => {
    res.json({msg: "Created a workout"})
}

const deleteWorkout = (req, res) => {
    res.json({msg: "workout deleted"})
}

const editWorkout = (req, res) => {
    res.json({msg: "Workout edited"})
}


module.exports = {
    getWorkout, getWorkouts, createWorkout, deleteWorkout, editWorkout
}