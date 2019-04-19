exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ShopItem")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ShopItem").insert([
        { id: 41, colName: "rowValue1" },
      ]);
    });
};
