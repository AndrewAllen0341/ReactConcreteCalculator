const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema({ 
    text: {
        type: String, 
        trim: true, 
        required: [true, 'Please add section']
    },
    squareFeet: {
        type: Number
    },
    InToFe: {
        type: Number
    },
    createdAt: {
        type: Date,
        defaulte: Date.now
    }
 });

 module.exports = mongoose.model('Section', SectionSchema)