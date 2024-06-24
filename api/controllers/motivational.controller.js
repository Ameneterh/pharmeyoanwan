import Motivational from "../models/motivational.model.js";
import { errorHandler } from "../utils/error.js";

export const createmotivational = async (req, res, next) => {
  console.log(req.user);
  if (!req.user) {
    return next(errorHandler(403, "You are not allowed to create a post"));
  }

  if (!req.body.content) {
    return next(errorHandler(400, "Please, provide all required fields"));
  }

  const newMotivational = new Motivational({
    ...req.body,
    userId: req.user.userId,
  });

  try {
    const savedMotivational = await newMotivational.save();
    res.status(201).json(savedMotivational);
  } catch (error) {
    next(error);
  }
};

export const getmotivational = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.order || "asc" ? 1 : -1;
    const motivation = await Motivational.find({
      ...(req.query.userId && { userId: req.query.userId }),
      ...(req.query.motivationalId && { _id: req.query.motivationalId }),
      ...(req.query.searchTerm && {
        $or: [{ content: { $regex: req.query.searchTerm, $options: "i" } }],
      }),
    })
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const totalMotivations = await Motivational.countDocuments();
    const now = new Date();
    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    const lastMonthMotivations = await Motivational.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res
      .status(200)
      .json({ motivation, totalMotivations, lastMonthMotivations });
  } catch (error) {
    next(error);
  }
};

export const deletemotivational = async (req, res, next) => {
  if (!req.user.isAdmin && req.user.userId !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to delete this Post"));
  }
  try {
    await Post.findByIdAndDelete(req.params.postId);
    res
      .status(200)
      .json(`The post with id ${req.params.postId} has been deleted`);
  } catch (error) {
    next(error);
  }
};

export const updatemotivational = async (req, res, next) => {
  if (!req.user.isAdmin && req.user.userId !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to update this post"));
  }

  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.postId,
      {
        $set: {
          posttitle: req.body.posttitle,
          postcontent: req.body.postcontent,
          category: req.body.category,
          postimage: req.body.postimage,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (error) {
    next(error);
  }
};
