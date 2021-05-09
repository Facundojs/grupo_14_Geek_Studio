module.exports = {
    development: {
    username:`${process.env.USERNAME_GEEK_DB}`,
    password: `${process.env.PASSWORD_GEEK_DB}`,
    database: `${process.env.DATABASE_GEEK_DB}`,
    host: `${process.env.HOST_GEEK_DB}`,
    dialect: `${process.env.DIALECT_GEEK_DB}`,
  },
  // development: {
  //   username: "root",
  //   password: null,
  //   database: "geekdb2" /* dbschema con nuevos campos geekdb  */,
  //   host: "127.0.0.1",
  //   dialect: "mysql",
  // },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username:`${process.env.USERNAME_GEEK_DB}`,
    password: `${process.env.PASSWORD_GEEK_DB}`,
    database: `${process.env.DATABASE_GEEK_DB}`,
    host: `${process.env.HOST_GEEK_DB}`,
    dialect: `${process.env.DIALECT_GEEK_DB}`,
  }
};

//"127.0.0.1"
// production: {
//   username: "root",
//   password: null,
//   database: "geekdb_2",
//   host: "127.0.0.1",
//   dialect: "mysql",
// },