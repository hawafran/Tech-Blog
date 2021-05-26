const { User } = require('../models');

const userData = [{
        username: 'Hawa',
        password: 'Asalamalaykum'

    },
    {
        username: 'Francis',
        password: 'Noporknobacon'
    },
    {
        username: 'Malik',
        password: '2yearoldGfazos'
    },
    {
        username: 'Kobe',
        password: 'TakeofftheVlone'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;