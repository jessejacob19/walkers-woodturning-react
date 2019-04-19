exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("Purchase")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("Purchase").insert([
        { id: 11, createdAt: new Date(), updatedAt: null, deletedAt: null, customerId: 1, priceTotal: 200.99 },
        { id: 12, createdAt: new Date(), updatedAt: null, deletedAt: null, customerId: 1, priceTotal: 86.77 },
        { id: 13, createdAt: new Date(), updatedAt: null, deletedAt: null, customerId: 1, priceTotal: 11.97 },
        { id: 14, createdAt: new Date(), updatedAt: null, deletedAt: null, customerId: 2, priceTotal: 69.69 },
        { id: 15, createdAt: new Date(), updatedAt: null, deletedAt: null, customerId: 2, priceTotal: 76.88 },
        { id: 16, createdAt: new Date(), updatedAt: null, deletedAt: null, customerId: 2, priceTotal: 147.55 },
        { id: 17, createdAt: new Date(), updatedAt: null, deletedAt: null, customerId: 3, priceTotal: 12 },
        { id: 18, createdAt: new Date(), updatedAt: null, deletedAt: null, customerId: 3, priceTotal: 1 },
        { id: 19, createdAt: new Date(), updatedAt: null, deletedAt: null, customerId: 4, priceTotal: 4 },

      ]);
    });
};
