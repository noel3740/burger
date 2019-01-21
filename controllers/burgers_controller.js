//Add dependencies
const express = require("express");
const burger = require("../models/burger");

//Initialize the express router
const router = express.Router();

//Create all the routs and setup logic withiin each route
router
    .get("/", (req, res) => {
        burger.all((result) => {
            const burgerObject = {
                burgers: result
            };
            res.render("index", burgerObject);
        });
    })
    .get("/api/burgers", (req, res) => {
        burger.all((result)=> {
            res.json(result);
        });
    })
    .post("/api/burgers", (req, res) => {
        burger.create(
            ["burger_name", "devoured"],
            [req.body.burger_name, req.body.devoured],
            (result) => {
                res.json({ id: result.insertId });
            });
    })
    .put("/api/burgers/:id", (req, res) => {
    burger.update(
        {
            devoured: req.body.devoured
        },
        req.params.id,
        (result) => {
            if (result.changedRows === 0) {
                res.status(404).send("No rows found to update!").end();
            } else {
                res.status(200).end();
            }
        });
    });

module.exports = router;