async function isAdminMiddleware(req, res, next) {
    if (req.session.userLogged && req.session.userLogged.user_type_id == 2) {
        console.log("Autorizado");
        return next();
    } else {
        console.log('No tienes los permisos');
        res.redirect('/')
    }

    next();
}

module.exports = isAdminMiddleware;