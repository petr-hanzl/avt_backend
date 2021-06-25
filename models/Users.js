const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    id_keycloak:{
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    zip: {
        type: Number,
        required: true,
    },

});


module.exports = mongoose.model('Users', UserSchema);