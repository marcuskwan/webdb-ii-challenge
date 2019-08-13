// up are the changes to make to the schema
exports.up = function(knex) {
  // create a table
  return knex.schema.createTable("cars", tbl => {
    // primary key, called id, integer, autoincrements
    tbl.increments();
    tbl
      // VIN, up to 17
      .string("VIN", 17)
      // unique
      .unique()
      // required
      .notNullable();
    // MAKE
    tbl
      .string("make", 128)
      // required
      .notNullable();
    // MODEL
    tbl
      .string("model", 128)
      // required
      .notNullable();
    // MILEAGE
    tbl
      .string("mileage", 128)
      // required
      .notNullable();
    // TRANSMISSION TYPE
    tbl.string("transmission_type", 128);
    // STATUS
    tbl.string("status", 128);
  });
};

// how we undo the changes made in the up function
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
