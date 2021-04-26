const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const publicPath = path.resolve(__dirname, "../public");
const viewsPath = path.resolve(__dirname, "./views");
const session = require("express-session");
const cookies = require("cookie-parser");
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");

app.use(
  session({
    secret: "Secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(cookies());
app.use(userLoggedMiddleware);
// app.use(rememberMiddleware)

app.use(express.static(publicPath));

// Formularios
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", viewsPath);

app.listen(process.env.PORT || 3000, () => {
  console.log(
    "|==============================================================================|"
  );
  console.log(
    "|---------------⭐⭐ Servidor corriendo en el puerto 3000 ⭐⭐-----------------|"
  );
  console.log(
    "|==============================================================================|"
  );
});

/************************************************************************************/

//middleWares
const notFoundMiddleware = require("./middlewares/notFoundMiddleware");

//Main
const mainRouter = require("./routes/mainRouter");
app.use("/", mainRouter);

/************************************************************************************/
//Productos
const productsRouter = require("./routes/productsRouter");
app.use("/productos", productsRouter);
/************************************************************************************/

//Users
const userRouter = require("./routes/userRouter");
app.use("/users", userRouter);

/************************************************************************************/
//APIS

const ApiUsersRouter = require("./routes/api/userRouter");
const ApiProductsRouter = require("./routes/api/productsRouter");
app.use("/api/users", ApiUsersRouter);
app.use("/api/products", ApiProductsRouter);

/************************************************************************************/
//Middleware Not-Found
app.use(notFoundMiddleware);
/************************************************************************************/
