const mongoose = require('mongoose');
const {Schema} = mongoose;

const TODOSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description : "String"
});

const TODO = mongoose.model("TODO", TODOSchema);

module.exports= TODO;