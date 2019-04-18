exports.up = function(knex, Promise) {
  return knex.schema.createTable("GalleryItem", table => {
    table
      .increments("id")
      .unsigned()
      .primary();
    table.dateTime("createdAt").notNull();
    table.dateTime("updatedAt").nullable();
    table.dateTime("deletedAt").nullable();

    table.string("category");
    table.string("subCategory");
    table.string("name");
    table.string("woodType");
    table.boolean("forSale");
    table.string("imgLink");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("PurchaseItem");
};
