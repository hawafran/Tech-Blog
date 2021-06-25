const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const sequelize = require('../../config/connection');

router.get('/', (req, res) => {
    console.log('get Comments');
    Comment.findAll()
            

     .then(dbCommentData => {
        
      res.json(dbCommentData);
    })

    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create new commetn
router.post('/',(req, res) => { 
    if(req.session){
    Comment.create({
       
        Comment_text: req.body.Comment_text,
        post_id: req.session.post.id,
        user_id: req.session.user.id

    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    }
});

// update Comment
router.put('/:id', (req, res) => {
    Comment.update(req.body,
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbCommentData => {
        if (!dbCommentData) {
            res.status(404).json({ message: 'Comment not found' });
            return;
        }
        res.json(dbCommentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

router.delete('/:id', (req, res) => {
    Comment.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbCommentData => {
        if (!dbCommentData) {
          res.status(404).json({ message: 'coment not found' });
          return;
        }
        res.json(dbCommentData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;