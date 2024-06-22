import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    postimage: {
      type: String,
      default:
        "https://png.pngtree.com/png-vector/20220521/ourmid/pngtree-building-website-project-as-programming-homepage-process-tiny-person-vector-illustration-png-image_4658684.png",
    },
    posttitle: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    postcontent: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
