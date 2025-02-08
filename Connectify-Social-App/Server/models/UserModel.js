import { genSalt, hash } from "bcrypt";
import mongoose from "mongoose";
// using mongoose inbuilt userschemma to create a user model
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

// using the "pre" to do what has to be done before saving
userSchema.pre("save", async function (next) {
  const salt = await genSalt();
  this.password = await hash(this.password, salt);
  // using to next() to continue the saving process  otherwise the code will stop here !
  next();
});
// creating a const name user as model and exporting it
const User = mongoose.model("Users", userSchema);
export default User;
