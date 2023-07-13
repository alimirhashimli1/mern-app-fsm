const mongoose = require("mongoose");
const Workout = require("../models/workoutModel")


const getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({}).sort({createdAt: -1})
        res.status(200).json(workouts)
    } catch (error) {
        res.json(400).json({error: error.message})
    }
}

const getWorkout = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "No Such workout"})
    }

        const workout = await Workout.findById(id)

        
        if(!workout) {
            res.status(404).json("No such workout")
        }

        res.status(200).json(workout)

}


const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body


    let emptyFields = []

    if(!title)  {
        emptyFields.push("title")
    }
    if(!load){
        emptyFields.push("load")
    }
    if(!reps)   {
        emptyFields.push("reps")
    }
    if(emptyFields.length > 0)  {
        return res.status(400).json({error: "Please fill in all the fields", emptyFields})
    }


    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

const deleteWorkout = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "No Such workout"})
    }

    const workout = await Workout.findByIdAndDelete(id)

    if(!workout) {
        res.status(404).json("No such workout")
    }

    res.status(200).json(workout)


}


const updateWorkout = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "No Such workout"})
    }
    const {title, load, reps} = req.body



        const workout = await Workout.findByIdAndUpdate(id, {title: title, load: load, reps: reps})
        if(!workout) {
            res.status(404).json("No such workout")
        }
        res.status(200).json(workout)
}


module.exports = {
    getWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout
}