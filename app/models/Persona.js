const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// se instancia un esquema

const PersonaSchema = new Schema({

    nombre : {
        type: String,
        required: true
    },
    apellido :{
        type: String,
        required: true
    }
    }
);
module.exports = mongoose.model('Persona',PersonaSchema);