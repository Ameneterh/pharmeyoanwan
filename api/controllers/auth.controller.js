import User from "../models/user.model.js";
import bycryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { fullname, username, email, pcnnumber, password, profilepic } =
    req.body;

  if (
    !fullname ||
    !username ||
    !email ||
    !pcnnumber ||
    !password ||
    fullname === "" ||
    username === "" ||
    email === "" ||
    pcnnumber === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required!"));
  }

  const hashedPassword = bycryptjs.hashSync(password, 10);

  const newUser = new User({
    fullname,
    username,
    email,
    pcnnumber,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    // res.json("New User Created Successfully");
    res.send({
      success: true,
      message: "New User Created Successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    next(errorHandler(404, "All fields are required!"));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, `User with email "${email}" not found`));
    }

    const validPassword = bycryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Invalid Credentials!"));
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET_KEY);

    const { password: pass, ...rest } = validUser._doc;

    res
      .status(200)
      .cookie("access_token", token, { httpOnly: true })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
