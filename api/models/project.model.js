import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    projectimage: {
      type: String,
      default:
        "https://png.pngtree.com/png-vector/20220521/ourmid/pngtree-building-website-project-as-programming-homepage-process-tiny-person-vector-illustration-png-image_4658684.png",
    },
    projectname: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    liveurl: {
      type: String,
      default: "/projects",
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
