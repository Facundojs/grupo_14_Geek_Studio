const express = require('express');

module.exports = {
    login: (req, res) => {
        res.render('login')
    },
    register: (req, res) => {
        res.render('register')
    },
    recoverPass: (req, res) => {
        res.render('recover-pass')
    },
}