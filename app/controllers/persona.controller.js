let Persona = require('../models/Persona');
let mongoose = require('mongoose');

exports.postPersona = function (req,res){

    //We need to get all fields from the body from our model
    if(!req.body.nombre){
        return res.status(400).send({err:"No hay nombre"});
    }
    if(!req.body.apellido){
        return res.status(400).send({err:"No hay apellido"});
    }

    let persona = new Persona();
    persona.nombre = req.body.nombre;
    persona.apellido = req.body.apellido;

    persona.save(function(err){
        if (err) return res.status(500).send({err:err});
        res.status(200).send({msg:"Se creo la persona"});
        }
    );
};


exports.getPersona = function(req,res){


       Persona.find({}, function(err,personas){
            if(err){
                return res.status(500).send({err:err});
            }
            else {
                return res.send(personas);
            }
        });


};


