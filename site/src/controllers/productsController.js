const jsonTable = require('../database/jsonTable');
//const model = require('../database/jsonTable');
const productsTable = jsonTable('products')
const { validationResult } = require('express-validator');

module.exports = {
    index: (req, res) => {
        let products = productsTable.all();

        res.render('products', {products: products})
    },
    create: (req, res) => {
        res.render('products/create')
    },
    store: (req, res) => {
        // Valido los campos
        let errors = validationResult(req);

        // Me fijo si no hay errores
        if (errors.isEmpty()) {
        // Genero el nuevo producto
        let product = req.body;

        if (req.file) {
            product.img = req.file.filename
        }

        let productId = productsTable.create(product)

        res.redirect('/productos/' + productId);
        // Si hay errores
        } else {
        // Renderizo el formulario nuevamente con los errors y los datos completados
            return res.render('products/create', { errors: errors.mapped(), old: req.body });
        }
        // console.table(product); //para ver que se creo por consola
    },
    show: (req, res) => {
        let product = productsTable.find(req.params.id)
        
        if (product) {
            res.render('detalle', { product });
        } else {
            res.send('No se encontró el producto')
        }
    },
    edit: (req, res) => {
        let productToEdit = productsTable.find(req.params.id);

        console.log(productToEdit)
        res.render('products/edit', { productToEdit });
    },
    update: (req, res) => {
        let product = req.body;
        product.id = Number(req.params.id);

        // Si viene una imagen nueva la guardo
        if (req.file) {
            product.img = req.file.filename;
        // Si no viene una imagen nueva, busco en base la que ya había
        } else {
            oldProduct = productsTable.find(product.id);
            product.img = oldProduct.img;
        }

        let productId = productsTable.update(product);

        res.redirect('/productos/' + productId);
    },
    destroy: (req, res) => {
        let products = productsTable.all()

        productsTable.delete(req.params.id);

        res.redirect('/productos');
    },
    chart: (req, res) => {
        res.render('carro', {products})
    },
}