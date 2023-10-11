const Comment = require('../models/commentModel');
const Post = require('../models/postModel')

exports.getAllComments = async (req,res) => {

        try {
            const comments = await Comment.find({post_id: req.params.id_post});
            res.status(200);
            res.json(comments);
        } catch (error) {
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur."});
        }
    }



    exports.getAComment = async (req,res) => {

        try {
            const comments = await Comment.findById(req.params.id_comment);
            res.status(200);
            res.json(comments);
        } catch (error) {
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur."});
        }
    
    
    }
    
    





exports.createAComment = async (req,res) => {
    try {

        const post = await Post.findById(req.params.id_post)
        const newComment = new Comment({...req.body, post_id: post});
        
            try {
                const comment = await newComment.save();
                res.status(201);
                res.json(comment);
            } catch (error) {
                console.log(error);
                res.status(500);
                res.json({message: "Erreur serveur.(db"});
            }
        
        
    } catch (error) {
        console.log(error);
        res.status(500);
        res.json({message: "Erreur serveur(post inexistant)."});
    } 
}


//     // exports.deleteAComment = async (req,res) => {
//     //     const commentDelete = new Comment(req.body)
//     //         try {
//     //             const comment = await Comment.findByIdAndDelete(commentDelete.id);
//     //             res.status(202);
//     //             res.json(comment);
//     //         } catch (error) {
//     //             res.status(500);
//     //             console.log(error);
//     //             res.json({message: "Erreur serveur."});
//     //         }
        
//     //     }


        exports.deleteAComment = async (req,res) => {
                try {
                    await Comment.findByIdAndDelete(req.params.id_comment);
             
                    if (!Comment) {
                        res.status(204)
                        res.send("comment not find");
                    } else {
                        res.status(204).json({message: "comment supprimé"});
                    }
                } catch (error) {
                    res.status(500);
                    console.log(error);
                    res.json({message: "Erreur serveur."});
                }
            
            }
            exports.updateAComment = async (req,res) => {   
                    try {
                        const comment = await Comment.findByIdAndUpdate(req.params.id_comment, req.body, {new: true});
                        res.status(203);
                        res.json(comment);
                    } catch (error) {
                        res.status(500);
                        console.log(error);
                        res.json({message: "Erreur serveur."});
                    }
                
                }
    

//                 // exports.updateAComment = async (req,res) => {
//                 //     const commentUpdate = new Comment(req.body)
        
//                 //         try {
//                 //             const comment = await Comment.findByIdAndUpdate(req.params.id_comment, {title: commentUpdate.title, content: commentUpdate.content});
//                 //             res.status(203);
//                 //             res.json(comment);
//                 //         } catch (error) {
//                 //             res.status(500);
//                 //             console.log(error);
//                 //             res.json({message: "Erreur serveur."});
//                 //         }
                    
//                 //     }
        