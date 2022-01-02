import * as faker from 'faker';
import {Model} from 'mongoose';

// NOTE: This doesn't work right now. Moving on and will come 
// back to seeding.


const main = async () => {
    const classNames = ['math', 'science', 'history', 'english'];

    const classes = [];
    for (const className in classNames) {
        classes.push({
            name: className,
            teacher: faker.name.findName(),
            grade: faker.datatype.number(),
        });
    }

    console.log('Seeding Class collection...');
    await Model.insertMany(classes);
    console.log('Class collection seeded.');

    return;
}