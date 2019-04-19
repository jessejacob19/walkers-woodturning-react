
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('GalleryItem').del()
    .then(function () {
      // Inserts seed entries
      return knex('GalleryItem').insert([
        {id: 1, colName: 'rowValue1'},
      ]);
    });
};
