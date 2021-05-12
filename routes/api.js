const Workout = require("../models/workout");

module.exports = function(app){
// Get for STATS
app.get("/api/workouts/range", ({ body }, res) => {
    Workout.find({})
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });



// Get all workouts
app.get("/api/workouts", ({ body }, res) => {
    Workout.find({})
      .then(dbTransaction => {
        res.send(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


// Create new workout
app.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbTransaction => {
      res.send(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Update by ID
// couldn't get this to run using the {body} key
// switched to req,res 
app.put("/api/workouts/:id", (req, res) => {
    const id = req.params.id;
    Workout.findByIdAndUpdate(id, {$push: {exercises: req.body}})
      .then(dbTransaction => {
        res.send(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

};


