
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('PurchaseItem').del()
    .then(function () {
      // Inserts seed entries
      return knex('PurchaseItem').insert([
        { id: 111, createdAt: new Date(), updatedAt: null, deletedAt: null, purchaseId: 11, customerId: 1, itemId: 41, price: 47.99, quantity: 3},
        { id: 112, createdAt: new Date(), updatedAt: null, deletedAt: null, purchaseId: 11, customerId: 1, itemId: 41, price: 47.99, quantity: 3},
        { id: 113, createdAt: new Date(), updatedAt: null, deletedAt: null, purchaseId: 12, customerId: 1, itemId: 41, price: 47.99, quantity: 3},
        { id: 114, createdAt: new Date(), updatedAt: null, deletedAt: null, purchaseId: 12, customerId: 1, itemId: 41, price: 47.99, quantity: 3},
        { id: 115, createdAt: new Date(), updatedAt: null, deletedAt: null, purchaseId: 13, customerId: 1, itemId: 41, price: 47.99, quantity: 3},
        { id: 116, createdAt: new Date(), updatedAt: null, deletedAt: null, purchaseId: 14, customerId: 2, itemId: 41, price: 47.99, quantity: 3},
        { id: 117, createdAt: new Date(), updatedAt: null, deletedAt: null, purchaseId: 15, customerId: 2, itemId: 41, price: 47.99, quantity: 3},
        { id: 118, createdAt: new Date(), updatedAt: null, deletedAt: null, purchaseId: 16, customerId: 2, itemId: 41, price: 47.99, quantity: 3},
        { id: 119, createdAt: new Date(), updatedAt: null, deletedAt: null, purchaseId: 17, customerId: 3, itemId: 41, price: 47.99, quantity: 3},
      ]);
    });
};
