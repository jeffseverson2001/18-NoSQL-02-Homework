const router = require("express").Router();
const Workout = require("../models/workout.js");


router.get("/api/workouts", (req, res) => {
    console.log("J-FIND");
    Workout.find({}).then(workoutData => {
        res.json(workoutData);
    })
        .catch(err => {
            res.status(400).json(err);
        });
})


router.get("/api/workouts/range", ({ }, res) => {
    console.log("J-RANGE");
    Workout.find({}).then((workoutData) => {
        res.json(workoutData);
    }).catch(err => {
        res.status(400).json(err);
    });
});


router.post("/api/workouts/", (req, res) => {
    console.log("J-CREATE");
    Workout.create(req.body).then((workoutData) => {
        res.json(workoutData);
    }).catch(err => {
        res.status(400).json(err);
    });
});


router.put("/api/workouts/:id", (req, res) => {
    console.log("J-ID-UPDATE");
    Workout.findByIdAndUpdate(
        { _id: req.params.id }, { $push: { exercises: req.body } }
    ).then((workoutData) => {
        res.json(workoutData);
    }).catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;