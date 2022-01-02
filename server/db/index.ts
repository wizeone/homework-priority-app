import mongoose from 'mongoose';

mongoose
    .connect('mongodb://127.0.0.1:27017/homework')
    .catch(e => {
        console.log('Connection error', e.message);
    });

const db = mongoose.connection;

export {db};