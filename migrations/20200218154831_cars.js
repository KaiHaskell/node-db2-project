
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
      tbl.increments();
      tbl.
  })
};

exports.down = function(knex) {
  
};
