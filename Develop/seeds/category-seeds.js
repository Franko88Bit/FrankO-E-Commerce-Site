const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Tee_Shirts',
  },
  {
    category_name: 'Cargo_Shorts',
  },
  {
    category_name: 'Loud_Music',
  },
  {
    category_name: 'Caps',
  },
  {
    category_name: 'Boots',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
