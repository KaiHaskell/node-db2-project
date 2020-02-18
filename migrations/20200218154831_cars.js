exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl
      .integer("VIN")
      .notNullable()
      .index();
    tbl.string("make", 64);
    tbl.string("model", 128);
    tbl.integer("mileage");
    tbl.string("transmission", 12);
    tbl.string("condition", 256);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
