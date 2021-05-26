const { Comment } = require('../models');

const commentData = [{
        comment_text: "I hope you get this jobb!",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "I may know a recruiter who can help.",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "What is your GitHub username?",
        user_id: 3,
        post_id: 3
    },
];

    const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;