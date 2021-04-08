// async function isAdmin(req, res, next) {
//     if (req.session.userLogged && req.session.userLogged.user_type_id == 2) {
//         return next();
//     } else {
//         console.log('No tienes los permisos');
//         res.redirect('/')
//     }

//     next();
// }

// module.exports = isAdmin;