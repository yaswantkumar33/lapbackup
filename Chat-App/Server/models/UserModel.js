import { genSalt } from "bcrypt";
import mongoose, { mongo } from "mongoose";
import { genSalt } from "bcrypt";
import { model } from "./../node_modules/mongoose/types/index.d";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email Is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    // required: [true, "lastname is required"],
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  color: {
    type: Number,
    required: false,
  },
  profileSetup: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("save", async function (next) {
  const salt = await genSalt();
  this.password = await hash(this.password, salt);
  next();
});

const User = mongoose.model("Users", userSchema);
export default User;
