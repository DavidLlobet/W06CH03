const express = require("express");
const ThingIKnow = require("../../database/models/thingIKnow");

const router = express.Router();

router.get("/", async (req, res) => {
  const thingsIKnow = await ThingIKnow.find();
  res.json(thingsIKnow);
});

router.get("/:idThing", async (req, res, next) => {
  const { idThing } = req.params;
  try {
    const searchedThingIKnow = await ThingIKnow.findById(idThing);
    if (searchedThingIKnow) {
      res.json(searchedThingIKnow);
    } else {
      const error = new Error("Thing I know not found");
      error.code = 404;
      throw error;
    }
  } catch (error) {
    error.code = 400;
    next(error);
  }
});

router.delete("/:idThing", async (req, res, next) => {
  const { idThing } = req.params;
  try {
    const searchedThingIKnow = await ThingIKnow.findByIdAndDelete(idThing);
    if (searchedThingIKnow) {
      res.json(searchedThingIKnow);
    } else {
      const error = new Error("Thing I know not found");
      error.code = 404;
      throw error;
    }
  } catch (error) {
    error.code = 400;
    next(error);
  }
});

router.post(
  "/new",
  (req, res, next) => {
    console.log("¡Ojo! Están creando un pet.");
    next();
  },
  async (req, res, next) => {
    try {
      const thingIKnow = req.body;
      const newThingIKnow = await ThingIKnow.create(thingIKnow);
      res.json(newThingIKnow);
    } catch (error) {
      error.code = 400;
      error.message = "Focus!";
      next(error);
    }
  }
);

module.exports = router;
