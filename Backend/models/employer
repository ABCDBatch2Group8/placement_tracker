const mongoose = require('mongoose');

const EmployerSchema = mongoose.Schema({
    title : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    phone : {
        type : String,
        required: true
    },
    password : {
        type : String,
        required: true
    },
    gstin: {
        type : String
    },
    companyInfo: {
        type: String
    }
});

module.exports = mongoose.model('Employers',EmployerSchema)