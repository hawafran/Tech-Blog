const { Post } = require('../models');

const postData = [{
        post_text: "Just went through my final round of interviews for this great company!",
        user_id: 1,
        
    },
    {
        post_text: "My recruiter is being so flakey.",
        user_id: 2,
        
    },
    {
        post_text: "Can someone take a look at my recent repository?",
        user_id: 3,
        
    },
];

    const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;