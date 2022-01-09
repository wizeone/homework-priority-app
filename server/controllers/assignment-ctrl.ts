import Assignment from "../models/assignment-model";

export const createAssignment = async (req: any, res: any) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "Assignment not provided.",
    });
  }

  const assignment = new Assignment(body);

  if (!assignment) {
    return res.status(400).json({
      success: false,
      error: "Malformed assignment data.",
    });
  }

  try {
    await assignment.save();

    return res.status(201).json({
      success: true,
      id: assignment._id,
      message: "Assignment created!",
    });
  } catch (error: any) {
    return res.status(400).json({
      error,
      message: "Assignment creation failed.",
    });
  }
};

export const deleteAssignment = (req: any, res: any) => {
  try {
    Assignment.findOneAndDelete(
      { _id: req.params.id },
      (err: any, assignment: typeof Assignment) => {
        if (err) {
          return res.status(400).json({ success: false, error: err });
        }

        if (!assignment) {
          return res
            .status(404)
            .json({ success: false, error: "Assignment not found." });
        }

        return res.status(200).json({ success: true, data: assignment });
      }
    );
  } catch (err: any) {
    console.log(err);
  }
};
