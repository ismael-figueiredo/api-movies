const path = require("path") // lida com o endereço em diferentes sistemas

module.exports = {
  development: {
    client: "sqlite",
    connection: {
      filename: path.resolve(__dirname, "src", "database", "database.db")
    },
    //habilita a relção com as chaves estrangeiras no sqlite
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    },
    //diretório das migrations
    migrations: { 
      directory: path.resolve(__dirname, "src", "database", "knex", "migrations")
    },
    useNullAsDefault: true //padrão para o sqlite
  }
};
