const express = require('express');
const router = express.Router();

const commentController = require('../controllers/commentController');


    router
        .route('/posts/:id_id_post/comments')
            .get(commentController.getAllComments)
            .post(commentController.createAComment);


    router
        .route('/comments/:id_comment')
            .get(commentController.getAComment)
            .delete(commentController.deleteAComment)
            .put(commentController.updateAComment);
    
    


    module.exports = router;

