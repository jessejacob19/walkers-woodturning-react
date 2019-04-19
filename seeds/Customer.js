
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Customer').del()
    .then(function () {
      // Inserts seed entries
      return knex('Customer').insert([
        {id: 1, createdAt: new Date(), updatedAt: null, deletedAt: null, 
          firstName: 'jeff', lastName: 'bezos', fullName: 'jeff bezos',
           phoneNumber: '0273774757', deliveryAddress: '2 home ln',
            billingAddress: '2 home ln', email: 'email@email.email'},
        
        {id: 2, createdAt: new Date(), updatedAt: null, deletedAt: null, 
          firstName: 'gary', lastName: 'lemonfish', fullName: 'gary lemonfish',
            phoneNumber: '0212344757', deliveryAddress: '4 home ln',
            billingAddress: '6 home ln', email: 'gmail@email.email'},


        {id: 3, createdAt: new Date(), updatedAt: null, deletedAt: null, 
          firstName: 'cliff', lastName: 'Ah-leong', fullName: 'cliff Ah-leong',
            phoneNumber: '0271234567', deliveryAddress: '44 giltrap rd',
            billingAddress: '33 lemonscent lane', email: 'cliff@isthe.man'},

        {id: 4, createdAt: new Date(), updatedAt: null, deletedAt: null, 
          firstName: 'jesus', lastName: 'christ', fullName: 'jesus christ',
            phoneNumber: '0277777777', deliveryAddress: '44 everywhere rd',
            billingAddress: '21 heaven lane', email: 'jesus@christ.com'}
      ]);
    });
};
