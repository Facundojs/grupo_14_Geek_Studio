users = [
  {
    id: 1,
    email: "kari.belen@gmail.com",
    first_name: "Karina Belen",
    surname: "Escobar",
    telephone: "112233444",
    password: "1234",
    password2: "1234",
  },
  {
    id: 2,
    email: "facu_serrano@gmail.com",
    first_name: "Facundo",
    surname: "Serrano",
    telephone: "112233444",
    password: "1234",
    password2: "1234",
  },
  {
    id: 3,
    email: "mauro_pedrozo@gmail.com",
    first_name: "Mauro",
    surname: "Pedrozo",
    telephone: "112233444",
    password: "1234",
    password2: "1234",
  },
  {
    id: 4,
    email: "lando@codelando.com",
    first_name: "Ezequiel",
    surname: "Cortés",
    telephone: "112233444",
    password: "1234",
    password2: "1234",
  },
];

const fs = require("fs");
const path = require("path");

let usersJson = JSON.stringify(users, null, "");
fs.writeFileSync("users.json", usersJson);
