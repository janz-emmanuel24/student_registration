const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String
    }, 
    title: {
        type: String
    },
    gender: {
        type: String
    },
    dateOfBirth: {
        type: Date
    },
    country: {
        type: String
    },
    nationality: {
        type: String
    },
    studentPhoto: {
        type: String
    },
    email: {
        type: String
    },
    faculty: {
        type: String
    },
    studentProgram: {
        type: String
    }
})

module.exports = mongoose.model('Student', studentSchema)