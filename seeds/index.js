const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedUsers();
    console.log('\n----- User Seed -----\n');
    await seedPosts();
    console.log('\n----- Post Seed -----\n');
    await seedComments();
    console.log('\n----- Comment Seed -----\n');
    process.exit(0);
};

seedAll();