import {Schema, model} from 'mongoose';

interface Assignment {
    name: string,
    due_date: Date,
    class: Schema.Types.ObjectId,
    total_points?: number,
    points_received?: number,
}

const schema = new Schema<Assignment>(
    {
        name: {type: String, required: true},
        due_date: {type: Date, required: true},
        class: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Class'
        },
        total_points: {type: Number},
        points_received: {type: Number}
    },
    {timestamps: true},
);

export default model('assignments', schema);