const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'metal music',
  },
  {
    tag_name: 'punk music',
  },
  {
    tag_name: 'teal',
  },
  {
    tag_name: 'pink',
  },
  {
    tag_name: 'evergreen',
  },
  {
    tag_name: 'magenta',
  },
  {
    tag_name: 'silver',
  },
  {
    tag_name: 'rap culture',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
