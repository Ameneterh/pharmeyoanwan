import mongoose from "mongoose";

const motivationalSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    content: {
      type: String,
      required: true,
      unique: true,
    },
    likes: {
      type: Array,
      default: [],
    },
    numberOfLikes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Motivational = mongoose.model("Motivational", motivationalSchema);

export default Motivational;
