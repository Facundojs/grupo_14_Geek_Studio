//La intención de este archivo es modularizar los distintos metodos en un objeto User
//1. Guardar usuario en la DB
//2. Buscar al usuario que se quiere loguear
//3. Buscar usuario por ID
//4. Editar informacion de un usuario
//5. Eliminar a un usuario de la DB

const fs = require("fs");
const path = require("path");

const User = {
  fileName: path.join(__dirname, "../database/users.json"),

  getData: function () {
    return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
  },

  generateId: function () {
    let allUsers = this.findAll();
    let lastUser = allUsers.pop(); //para obtener el ultimo usuario como es sobre el array
    //no estoy escribiendo el archivo, solo obtengo el último elemento
    if (lastUser) {
      return lastUser.id + 1;
    }
    return 1;
    //test: console.log(User.generateId());
  },

  findAll: function () {
    return this.getData();
  },

  findByPk: function (id) {
    //busco por primary key
    let allUsers = this.findAll();
    let userFound = allUsers.find((oneUser) => oneUser.id == id);
    return userFound;
    //para probar este metodo hago un console.log(user.findByPk(2));
  },

  findField: function (field, text) {
    //busco por campo
    let allUsers = this.findAll();
    let userFound = allUsers.find((oneUser) => oneUser[field] == text);
    return userFound;
    //para probar este metodo hago un console.log(user.findField('email0, 'kari.belen@gmail.com));
  },

  create: function (userData) {
    //busco usuarios
    let allUsers = this.findAll();
    let newUser = {
      id: this.generateId(),
      ...userData,
    };
    //con el operador de propagacion spred operator ... lo que hago es enviar todo

    allUsers.push(newUser); //Inserto el nuevo usuario al array
    fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, " ")); //grabo el archivo json con el mismo formato por eso el null y ' '
    return newUser;
  },
  edit: function (id) {
    //let UpdateUser = req.body.id;
    //User.findByPk(UpdateUser);
  },

  delete: function (id) {
    let allUsers = this.findAll();
    let finalUsers = allUsers.filter((oneUser) => oneUser.id != id);
    //console.log("finalUsers", finalUsers);
    //Busco TODOS los registros excepto el que pase x ID
    //lo que obtengo es un array solo con los IDs que me quiero quedar y vuelvo a escribir el archivo
    fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, " "));
    //console.log(finalUsers);
    return true;
  },
}; //fin User

const bcryptjs = require("bcryptjs");
let password = bcryptjs.hashSync("1234", 10);
console.log("bcryptjs: ", password);
//console.log(User.findByPk(7));
//console.log(User.delete(6));
module.exports = User; //exporto la funcionalidad de mi modelo
