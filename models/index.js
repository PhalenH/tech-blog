const Blog = require('./Blog');
const User = require('./User');

// A blog belongs to a single user
Blog.hasOne(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });

// A user can have many blogs
  User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });

module.exports = { Blog, User }