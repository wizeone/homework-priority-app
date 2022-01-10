import { Class, ClassModel } from "../models/class-model";

export const createClass = async (req: any, res: any) => {
  const body = req.body as Class;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "Class not provided.",
    });
  }

  const classObj = new ClassModel(body);

  if (!classObj) {
    return res.status(400).json({
      success: false,
      error: "Malformed class data.",
    });
  }

  try {
    await classObj.save();

    return res.status(201).json({
      success: true,
      id: classObj._id,
      message: "Class created!",
    });
  } catch (error: any) {
    return res.status(400).json({
      error,
      message: "Class creation failed.",
    });
  }
};

module.exports = {
  createClass,
};
