const db = require("../../../database/models");

async function userLoggedMiddleware(req, res, next) {
  console.clear()
  res.locals.isLogged = false;

  let userCookie = '';
  let userData = '';

  if (req.cookies.mailDeUsuario) {
    
    userCookie = req.cookies;

    const {dataValues} = await db.User.findOne({
      where: {
        email: userCookie.mailDeUsuario
      },
    })
    console.log('======================================================================');
    console.log(dataValues);
    console.log('======================================================================');
    delete dataValues.password;
    userData = dataValues
  }
  // console.log(userData);
  if (req.session && req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
  }//

  if (userCookie && !req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userLogged = userData;
    req.session.userLogged = userData;
  }
  next();
}

module.exports = userLoggedMiddleware;
