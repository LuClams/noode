// module.exports = (server) => {
//     const postController = require('../controllers/postController')
//     server.route('/posts')
//     .get(postController.listAllPosts)
//     //.get(postController.listAPosts)
//     .post(postController.createAPost)
//     .delete(postController.deleteAPost)
//     //.delete(postController.deleteAll)
//     .patch(postController.updateAPost); 

    


// }



const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

    router
    .route('/')
        .get(postController.listAllPosts)
        .post(postController.createAPost);
    //.delete(postController.deleteAll);


router
    .route('/:id_post')
        .get(postController.getAPosts)
        .delete(postController.deleteAPost)
        .put(postController.updateAPost); 

    module.exports = router;