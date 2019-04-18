exports.up = function(knex, Promise) {
  return knex.schema.createTable("ShopItem", table => {
    table
      .increments("id")
      .unsigned()
      .primary();
    table.dateTime("createdAt").notNull();
    table.dateTime("updatedAt").nullable();
    table.dateTime("deletedAt").nullable();

    table.string("category");
    table.string("name");
    table.integer("price");
    table.string("description");
    table.string("imgLink");
    table.integer("amountLeft");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("ShopItem");
};
