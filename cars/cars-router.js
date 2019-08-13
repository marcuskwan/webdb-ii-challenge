const express = require("express");
const knex = require("knex");

const knexConfig = require("../knexfile.js");

const db = knex(knexConfig.development);

// this is how we connect knex to the database
// const db = knex({
//   // driver to use
//   client: 'sqlite3',
//   // how to find the database
//   connection: {
//     // from the root folder
//     filename: './data/produce.db3',
//   },
//   // required for sqlite
//   useNullAsDefault: true,
// });

const router = express.Router();

// GET
// get all cars
router.get("/", async (req, res) => {
  try {
    const cars = await db("cars");
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve cars" });
  }
});

// get car by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const car = await db("cars").where({ id });

    res.json(car);
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve car" });
  }
});

// POST
// post new car
router.post("/", async (req, res) => {
  try {
    const newCarData = req.body;
    const [id] = await db("cars").insert(newCarData);
    const newCar = await db("cars").where({ id });

    res.status(201).json(newCar);
  } catch (err) {
    console.log("POST error", err);
    res.status(500).json({ message: "Failed to store data" });
  }
});

module.exports = router;
