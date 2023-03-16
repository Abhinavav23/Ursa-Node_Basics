const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 6,
    },
    email: {
      type: String,
      required: true,
      minLength: 8,
      maxLength: 25,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
      maxLength: 15,
    },
    mobile: {
      type: Number,
      minLength: 10,
      required: true,
    },
    batch: {
      type: String,
      enum: ["Ursa", "Juno"],
    },
  },
  { versionKey: false }
);

const User = model("user", userSchema);

module.exports = User;
