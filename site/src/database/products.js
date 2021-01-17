const express = require('express');
const path = require('path') ;
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

module.exports = [
    {
        name: '',
        price: '',
        img: '',
        discount: true,
        features: [],
    },
    {
        name: '',
        price: '',
        img: '',
        discount: true,
        features: [],
    },
    {
        name: '',
        price: '',
        img: '',
        discount: true,
        features: [],
    },
]