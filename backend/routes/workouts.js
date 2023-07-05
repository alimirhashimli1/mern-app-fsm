const express = require("express")

const router = express.Router()


router.get("/", (req, res) => {
    res.json({msg: "GET All workouts"})
})

router.get("/:id", (req, res) => {
    res.json({msg: "GET a workout"})
})

router.delete("/", (req, res) => {
    res.json({msg: "POST a workout"})

})








module.exports = router