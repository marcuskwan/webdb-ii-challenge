// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/produce.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
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