const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
    userId: [String],
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const ClientModel = mongoose.model('ClientModel', ClientSchema)
module.exports = ClientModel