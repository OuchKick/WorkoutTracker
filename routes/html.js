const path = require('path');

module.exports = function(app){

    // Index HTML / HomePage
    app.get("/", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));

    });

    // Stats HTML / Stats Page with Graphs
    app.get("/stats", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));

    });
    //  Exercise HTML / Add Exercise Page
    app.get("/exercise", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));

    });

};