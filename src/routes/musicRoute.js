const express = require('express');
const router = express.Router();

const musicController = require('../controllers/musicController');


    router
        .route('/posts/:id_id_post/comments')
            .get(musicController.getAllMusics)
            .post(musicController.createAMusic);


    router
        .route('/comments/:id_comment')
            .get(musicController.getAMusic)
            .delete(musicController.deleteAMusic)
            .put(musicController.updateAMusic);
    
    


    module.exports = router;

