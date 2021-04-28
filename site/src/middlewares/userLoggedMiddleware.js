const db = require("../../../database/models");

async function userLoggedMiddleware(req, res, next) {
  res.locals.isLogged = false;

  let userCookie = '';
  let userData = '';

  if (req.cookies.mailDeUsuario) {
    
    userCookie = req.cookies;

    const usuario = await db.User.findOne({
      where: {
        email: userCookie.mailDeUsuario
      },
    })
    const dataValues =  usuario ? usuario.dataValues : ''
    if (dataValues) {
      delete dataValues.password;
      userData = dataValues
    }
  }
  // console.log(userData);
  if (req.session && req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
    // console.log(res.locals.userLogged)
  }//

  if (userCookie && !req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userLogged = userData;
    req.session.userLogged = userData;
  }
  next();
}

module.exports = userLoggedMiddleware;
