const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/api/workout", (req, res) => {
    Workout.find({})
      .sort({ date: -1 })
      .then(Workout => {
        res.json(Workout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  })

module.exports = router;