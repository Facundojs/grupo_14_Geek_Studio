const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const { callbackify } = require('util');

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


module.exports = {
    index: (req,res) => {
        //res.send("LISTADO USERS")
        res.render('users/index', {users})
    },
    login: (req, res) => {
        res.render('users/login');
    },
    crear: (req, res) => {
        res.render('users/crear');
    },
    store: (req,res) =>{
        //res.send('estoy en el store');

        //Genero un nuevo usuario
        let newUser = req.body;

        //Agrego el nuevo usuario
        users.push(newUser);
    
        //guardo info en el json
        let userJson = JSON.stringify(users, null, ' ');
        fs.writeFileSync(path.join(__dirname, "../database/users.json"), userJson);

        
    },
    show: (req,res)=>{
        //busco el usuario en el json
        let user = jsonTable.findById(req.params.id);
        res.render('users/detail', { user });   
        //mi ruta para ejecutar seria: http://localhost:3000/users/1
        if ( user ) {
            res.send(req.body);
        }
        else{
            res.send("No encontre el usuario");
        }
    },
    edit: (req, res) => {
        let user = users.find(user => user.id == req.params.id);
        res.render('users/edit', {user});

    },
    update: (req,res) => {
        let updatedUser = req.body; //tomo el usuario que viene del form

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

        res.redirect('users/index');

    },
    recoverPass: (req, res) => {
        res.render('users/recover-pass')
    }
};


