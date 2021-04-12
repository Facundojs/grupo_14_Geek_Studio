function isAdminMiddleware(req, res, next) {
    if (req.session.userLogged && req.session.userLogged.user_type_id == 1) {
        return next();
    } else {
        res.redirect('/')
    }
    next();
}

module.exports = isAdminMiddleware;