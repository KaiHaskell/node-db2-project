const router = require("express").Router();

const db = require("../data/dbConfig");

router.get("/", (req, res) => {
  db.select("*")
    .from("cars")
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ Error: "Can't get the list of cars" });
    });
});

router.post("/", (req, res) => {
  db("cars")
    .insert(req.body, "id")
    .then(id => {
      res.status(201).json(id[0]);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ Error: "Failed to add the car" });
    });
});

module.exports = router;
