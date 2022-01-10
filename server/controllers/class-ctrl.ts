import { Class, ClassModel } from '../models/class-model';

export const createClass = async (req: any, res: any) => {
  try {
    const body = req.body as Class;

    if (!body) {
      return res.status(400).json({
        success: false,
        error: 'Class not provided.',
      });
    }

    const classObj = new ClassModel(body);

    if (!classObj) {
      return res.status(400).json({
        success: false,
        error: 'Malformed class data.',
      });
    }

    await classObj.save();

    return res.status(201).json({
      success: true,
      id: classObj._id,
      message: 'Class created!',
    });
  } catch (error: any) {
    return res.status(400).json({
      error,
      message: 'Class creation failed.',
    });
  }
};

export const updateClass = async (req: any, res: any) => {
  try {
    const body = req.body as Class;

    if (!body) {
      return res.status(400).json({
        success: false,
        message: 'You must provide a body to update.',
      });
    }

    const classObj: Class | null = await ClassModel.findOneAndUpdate(
      { _id: req.params.id },
      body,
      { returnOriginal: false }
    );

    if (!classObj) {
      return res
        .status(404)
        .json({ success: false, message: 'Class not found.' });
    }

    return res.status(200).json({ success: true, data: classObj });
  } catch (error: any) {
    return res
      .status(400)
      .json({ success: false, error, message: 'Class update failed.' });
  }
};

export const deleteClass = async (req: any, res: any) => {
  try {
    const classObj: Class | null = await ClassModel.findOneAndDelete({
      _id: req.params.id,
    });

    if (!classObj) {
      return res
        .status(404)
        .json({ success: false, message: 'Class not found' });
    }

    return res.status(200).json({ success: true, data: classObj });
  } catch (error: any) {
    return res
      .status(400)
      .json({ success: false, error, message: 'Class deletion failed.' });
  }
};

export const getClassById = async (req: any, res: any) => {
  try {
    const classObj: Class | null = await ClassModel.findById(req.params.id);

    if (!classObj) {
      return res
        .status(404)
        .json({ success: false, message: 'Class not found.' });
    }

    return res.status(200).json({ success: true, data: classObj });
  } catch (error: any) {
    return res
      .status(400)
      .json({ success: false, error, message: 'Class lookup failed.' });
  }
};

export const getClasses = async (req: any, res: any) => {
  try {
    const classes: Class[] = await ClassModel.find({});

    return res.status(200).json({ success: true, data: classes });
  } catch (error: any) {
    return res
      .status(400)
      .json({ success: false, error, message: 'Classes lookup failed.' });
  }
};
