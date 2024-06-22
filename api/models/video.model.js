import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    videotitle: {
      type: String,
      required: true,
    },
    videodescription: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    liveurl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Video = mongoose.model("Video", videoSchema);

export default Video;
