exports.up = function(knex, Promise) {
  return knex.schema.createTable("Purchase", table => {
    table
      .increments("id")
      .unsigned()
      .primary();
    table.dateTime("createdAt").notNull();
    table.dateTime("updatedAt").nullable();
    table.dateTime("deletedAt").nullable();

    table.integer("customerId");
    table.integer("priceTotal");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("Purchase");
};
