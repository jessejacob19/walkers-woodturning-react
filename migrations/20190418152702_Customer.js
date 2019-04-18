
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Customer', (table) => {
    table.increments('id').unsigned().primary()
    table.dateTime('createdAt').notNull();
    table.dateTime('updatedAt').nullable();
    table.dateTime('deletedAt').nullable();

    table.string('firstName')
    table.string('lastName')
    table.string('fullName')
    table.string('phoneNumber')
    table.string('deliveryAddress')
    table.string('billingAddress')
    table.string('email')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Customer')
};
