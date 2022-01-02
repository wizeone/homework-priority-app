import Assignment from '../models/assignment-model';

export const createAssignment = async (req: any, res: any) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Assignment not provided.',
        });
    }

    const assignment = new Assignment(body);

    if (!assignment) {
        return res.status(400).json({
            success: false,
            error: 'Malformed assignment data.',
        });
    }

    try {
        await assignment.save();

        return res.status(201).json({
            success: true,
            id: assignment._id,
            message: 'Assignment created!',
        })
    } catch (error: any) {
        return res.status(400).json({
            error,
            message: 'Assignment creation failed.',
        });
    }
}

module.exports = {
    createAssignment,
};