const { Schema, model } = require("mongoose");

const thingsIKnowSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const ThingIknow = model("ThingIKnow", thingsIKnowSchema);

module.exports = ThingIknow;
