// Update with your config settings.

module.exports = {
  development: {
    // driver to use
    client: "sqlite3",
    // how to find the database
    connection: {
      // from the root folder
      filename: "./data/car-dealer.db3",
    },
    // require for sqlite
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};

// RULE: EVERY SCHEMA CHANGE NEEDS A NEW MIGRATION

// npx knex init
// npx knex migrate:make fruits_table
// npx knex migrate:latest
// npx knex migrate:rollback
// npx knex seed:make 001-fruits
// npx knex seed:run
