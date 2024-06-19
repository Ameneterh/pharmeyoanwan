import Project from "../models/project.model.js";
import { errorHandler } from "../utils/error.js";

export const create = async (req, res, next) => {
  console.log(req.user);
  if (!req.user) {
    return next(errorHandler(403, "You are not allowed to create a post"));
  }

  if (!req.body.projectname || !req.body.description) {
    return next(errorHandler(400, "Please, provide all required fields"));
  }
  const slug = req.body.projectname
    .split(" ")
    .join("-")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "-");
  const newProject = new Project({
    ...req.body,
    slug,
    userId: req.user.userId,
  });

  try {
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    next(error);
  }
};

export const getprojects = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.order || "asc" ? 1 : -1;
    const projects = await Project.find({
      ...(req.query.userId && { userId: req.query.userId }),
      ...(req.query.category && { category: req.query.category }),
      ...(req.query.slug && { slug: req.query.slug }),
      ...(req.query.projectId && { _id: req.query.projectId }),
      ...(req.query.searchTerm && {
        $or: [
          { projectname: { $regex: req.query.searchTerm, $options: "i" } },
          { description: { $regex: req.query.searchTerm, $options: "i" } },
        ],
      }),
    })
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const totalProjects = await Project.countDocuments();
    const now = new Date();
    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    const lastMonthProjects = await Project.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({ projects, totalProjects, lastMonthProjects });
  } catch (error) {
    next(error);
  }
};

export const deleteproject = async (req, res, next) => {
  if (req.user.userId !== req.params.userId) {
    return next(
      errorHandler(403, "YOu are not allowed to delete this Project")
    );
  }
  try {
    await Project.findByIdAndDelete(req.params.projectId);
    res
      .status(200)
      .json(`The project with id ${req.params.projectId} has been deleted`);
  } catch (error) {
    next(error);
  }
};

export const updateproject = async (req, res, next) => {
  console.log(req.user);
  if (req.user.userId !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to update this post"));
  }

  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.projectId,
      {
        $set: {
          projectimage: req.body.projectimage,
          projectname: req.body.projectname,
          description: req.body.description,
          category: req.body.category,
          liveurl: req.body.liveurl,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedProject);
  } catch (error) {
    next(error);
  }
};
