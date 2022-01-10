import { AssignmentModel, Assignment } from '../models/assignment-model';

export const createAssignment = async (req: any, res: any) => {
  try {
    const body = req.body as Assignment;

    if (!body) {
      return res.status(400).json({
        success: false,
        error: 'Assignment not provided.',
      });
    }

    const assignment = new AssignmentModel(body);

    if (!assignment) {
      return res.status(400).json({
        success: false,
        error: 'Malformed assignment data.',
      });
    }

    await assignment.save();

    return res.status(201).json({
      success: true,
      id: assignment._id,
      message: 'Assignment created!',
    });
  } catch (error: any) {
    return res.status(400).json({
      error,
      message: 'Assignment creation failed.',
    });
  }
};

export const updateAssignment = async (req: any, res: any) => {
  try {
    const body = req.body as Assignment;

    if (!body) {
      return res.status(400).json({
        success: false,
        message: 'You must provide a body to update.',
      });
    }

    const assignment: Assignment | null =
      await AssignmentModel.findOneAndUpdate(
        {
          _id: req.params.id,
        },
        body,
        { returnOriginal: false }
      );

    if (!assignment) {
      return res.status(400).json({
        success: false,
        Message: 'Assignment not found.',
      });
    }

    return res.status(200).json({ success: true, data: assignment });
  } catch (error: any) {
    return res
      .status(400)
      .json({ success: false, error, message: 'Assignment update failed.' });
  }
};

export const deleteAssignment = async (req: any, res: any) => {
  try {
    const assignment: Assignment | null =
      await AssignmentModel.findOneAndDelete({ _id: req.params.id });

    if (!assignment) {
      return res
        .status(404)
        .json({ success: false, message: 'Assignment not found.' });
    }

    return res.status(200).json({ success: true, data: assignment });
  } catch (error: any) {
    return res
      .status(400)
      .json({ success: false, error, message: 'Assignment deletion failed.' });
  }
};
