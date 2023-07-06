const { timeStamp } = require('console')
const mongoose = require('mongoose')

const Student_Schema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    College: {
        type: String,
        required: true
    },
    dept: {
        type: String,
        required: true
    },
    Year: {
        type: Number,
        required: true
    }
}, {timestamps: true})

const Expert_Schema = new mongoose.Schema({
    fsname: {
        type: String,
        required: true
    },
    lsname: {
        type: String,
        required: true
    },
    Expertise: {
        type: String,
        required: true
    },
    Experience: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Student', Student_Schema)
module.exports = mongoose.model('Experts', Expert_Schema)