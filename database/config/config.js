module.exports = {
  // development: {
  //   username: "freedbtech_Facundo",
  //   password: "Julian10",
  //   database: "freedbtech_geekdbfacu",
  //   host: "freedb.tech",
  //   dialect: "mysql",
  // },
  development: {
    username: "root",
    password: null,
    database: "geekdb2" /* dbschema con nuevos campos geekdb  */,
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "freedbtech_Facundo",
    password: "Julian10",
    database: "freedbtech_geekdbfacu" /* dbschema con nuevos campos geekdb  */,
    host: "freedb.tech",
    dialect: "mysql",
  },
};

//"127.0.0.1"
// production: {
//   username: "root",
//   password: null,
//   database: "geekdb_2",
//   host: "127.0.0.1",
//   dialect: "mysql",
// },