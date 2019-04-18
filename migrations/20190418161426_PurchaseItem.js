exports.up = function(knex, Promise) {
  return knex.schema.createTable("PurchaseItem", table => {
    table
      .increments("id")
      .unsigned()
      .primary();
    table.dateTime("createdAt").notNull();
    table.dateTime("updatedAt").nullable();
    table.dateTime("deletedAt").nullable();

    table.integer("purchaseId");
    table.integer("customerId");
    table.integer("itemId");
    table.string("itemName");
    table.integer("price");
    table.integer("quantity");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("PurchaseItem");
};
