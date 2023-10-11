const Post = require('../models/postModel');

exports.listAllPosts = async (req,res) => {
// ES6
// post
//     .find({})
//     .then(posts => {
//     res.status(200);
//     res.json(posts);
    
//     })
//     .catch(error => {
//     res.status(500);
//     console.log(error);
//     res.json({message: "Erreur serveur."});
//     })

    try {
        const posts = await Post.find({});
        res.status(200);
        res.json(posts);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: "Erreur serveur."});
    }


}

exports.getAPosts = async (req,res) => {

        try {
            const posts = await Post.findById(req.params.id_post);
            res.status(200);
            res.json(posts);
        } catch (error) {
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur."});
        }
    
    
    }
    
    





exports.createAPost = async (req,res) => {
    const newPost = new Post(req.body);
    
        try {
            const post = await newPost.save();
            res.status(201);
            res.json(post);
        } catch (error) {
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur."});
        }
    
    }


    // exports.deleteAPost = async (req,res) => {
    //     const postDelete = new Post(req.body)
    //         try {
    //             const post = await Post.findByIdAndDelete(postDelete.id);
    //             res.status(202);
    //             res.json(post);
    //         } catch (error) {
    //             res.status(500);
    //             console.log(error);
    //             res.json({message: "Erreur serveur."});
    //         }
        
    //     }


        exports.deleteAPost = async (req,res) => {
                try {
                    await Post.findByIdAndDelete(req.params.id_post);
                    res.status(202);
                    res.json({message: "article supprimé"});
                } catch (error) {
                    res.status(500);
                    console.log(error);
                    res.json({message: "Erreur serveur."});
                }
            
            }
    
        exports.deleteAll = async (req,res) => {
            const postDelete = new Post(req.body)
                try {
                    const post = await Post.deleteMany();
                    res.status(202);
                    res.json({message: "tout les articles ont eté supprimés"});
                } catch (error) {
                    res.status(500);
                    console.log(error);
                    res.json({message: "Erreur serveur."});
                }
            
            }
        


        exports.updateAPost = async (req,res) => {
            const postUpdate = new Post(req.body)

                try {
                    const post = await Post.findByIdAndUpdate(req.params.id_post, {title: postUpdate.title, content: postUpdate.content});
                    res.status(203);
                    res.json(post);
                } catch (error) {
                    res.status(500);
                    console.log(error);
                    res.json({message: "Erreur serveur."});
                }
            
            }


            exports.updateAPost = async (req,res) => {   
                    try {
                        const post = await Post.findByIdAndUpdate(req.params.id_post, req.body, {new: true});
                        res.status(203);
                        res.json(post);
                    } catch (error) {
                        res.status(500);
                        console.log(error);
                        res.json({message: "Erreur serveur."});
                    }
                
                }
    

                // exports.updateAPost = async (req,res) => {
                //     const postUpdate = new Post(req.body)
        
                //         try {
                //             const post = await Post.findByIdAndUpdate(req.params.id_post, {title: postUpdate.title, content: postUpdate.content});
                //             res.status(203);
                //             res.json(post);
                //         } catch (error) {
                //             res.status(500);
                //             console.log(error);
                //             res.json({message: "Erreur serveur."});
                //         }
                    
                //     }
        