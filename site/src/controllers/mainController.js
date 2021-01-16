const express = require('express');

module.exports = {
    index: (req, res) => {
        res.render('home')
    }
}