const mongoose = require('mongoose');
const { Schema } = mongoose;

const TODOSchema = new Schema(
    {
        title: {
            type: String,
        },
        description: String,
    },
    {
        timestamps: true, // Add timestamps option
    }
);

const TODO = mongoose.model('TODO', TODOSchema);

module.exports = TODO;
