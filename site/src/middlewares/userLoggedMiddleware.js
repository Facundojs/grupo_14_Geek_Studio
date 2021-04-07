const db = require("../../../database/models");

async function userLoggedMiddleware(req, res, next) {
  console.clear()
  res.locals.isLogged = false;


  // if (req.session && req.session.userLogged) {
  //   res.locals.isLogged = true;
  //   res.locals.userLogged = req.session.userLogged;
  // }


  let userCookie = '';
  let userData = '';
  if (req.cookies.mailDeUsuario) {
    
    userCookie = req.cookies;

    let {dataValues} = await db.User.findOne({
      where: {
        email: userCookie.mailDeUsuario
      },
    })
    
    userData = dataValues


  } else {console.log('No cookie');}
  
  console.log('userData ');
  console.log(userData);
  console.log('===========================');

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
