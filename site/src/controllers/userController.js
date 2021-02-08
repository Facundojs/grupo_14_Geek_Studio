const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const { callbackify } = require('util');
const User = require('../models/User');

const storage= multer.diskStorage({
destination: (req, file, callback) => {
    callback(null, path.join(__dirname, "../../public/img/users/"));
},
filename: (req,res, callback) =>{
    callback(null,'user-img', Date.now(), path.extname(file.originalname))
}
});

    
const usersFile = path.join(__dirname, "../database/users.json");
let users = fs.readFileSync(usersFile, 'utf-8');

users = JSON.parse(users);

const jsonTable = {
    filePath: path.join(__dirname, '../database/users.json'),
    readFile() {
        let rows = fs.readFileSync(this.filePath, 'utf-8');
        rows = JSON.parse(rows);

        return rows;
    },

    findById(id) {
        // Me traigo todas las filas
        let rows = this.readFile();

        // Retorno solo aquella que tenga el mismo id
        return rows.find(user => user.id == id);
    }
};

console.log("1 user:", users);

module.exports = {
    index: (req,res) => {
        res.render('users/index', {users})
    },
    login: (req, res) => {
        res.render('users/login');
    },
    create: (req, res) => {
        res.render('users/create');
    },
    processRegister: (req,res) => {
        //console.log("body", req.body);
        //valido si el mail esta registrado
        let userInDb = User.findField('email', req.body.email);

        /* --Agregar tema de validaciones primero
        if (userInDb) {
            return res.render('userRegisterForm', {
                errors: {
                    email: {
                        msg: 'Este email ya esta registrado'}
                }, 
                //oldData = req.body
            });
            
        }
        */

        User.create(req.body);
        users = User.findAll();
        console.log("todos los usuarios:", users);
        //res.redirect('users/index/', {users} );
        res.redirect('login'); //res.redirect('index');
    },
    destroy: (req,res) => {
        console.log("usuario a eliminar ", req.body);
        let userDelete = req.body;
        User.delete(userDelete);
        res.redirect('index');
    },
    show: (req,res)=>{
        //busco el usuario en el json
        //let user = jsonTable.findById(req.params.id);
        let user = User.findByPk(req.params.id);
        res.render('users/edit', { user });   
        //mi ruta para ejecutar seria: http://localhost:3000/users/1
        if ( user ) {
            res.send(req.body);
        }
        else{
            res.send("No encontre el usuario");
        }
    },
    edit: (req, res) => {
        let updatedUser = req.body; //tomo el usuario que viene del form
        updatedUser = User.findByPk(req.params.id);
        if (updatedUser) {
            res.render('users/edit', {user});
        }

        

    },
    update: (req,res) => {
        let updatedUser = req.body; //tomo el usuario que viene del form
        updatedUser.id = req.params.id;
        //Actualizo el array encontrado
        let updatedUsers = users.map(user => {
            if (user.id == req.params.id){
                return updatedUser;
            }
            else{
                return user;
            }
        });

        //Grabo json
        let userJson = JSON.stringify(updatedUsers, null, ' ');
        fs.writeFileSync(path.join(__dirname, "../database/users.json"), userJson);

        res.redirect('/users/index');

    },
    recoverPass: (req, res) => {
        //res.send("recover");
        res.render('/users/recover-pass');
    }
};


