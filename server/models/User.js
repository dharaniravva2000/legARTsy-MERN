// server/models/User.js

import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true }, // User full name
  email: { type: String, required: true, unique: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  password: { type: String, required: true },
  profileImage: {
    type: String,
  },
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order" // Reference to Order model
    }
  ]
}, { timestamps: true }); // adds createdAt and updatedAt automatically

const UserModel = model("Users", UserSchema);
export default UserModel;
