const Music = require('../models/musicModel');

exports.listAllMusics = async (req,res) => {

    try {
        const musics = await Music.find({});
        res.status(200);
        res.json(musics);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: "Erreur serveur."});
    }


}

exports.getAMusic = async (req,res) => {

        try {
            const music = await Music.findById(req.params.id_music);
            res.status(200);
            res.json(music);
        } catch (error) {
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur."});
        }
    
    
    }
    
    





exports.createAMusic = async (req,res) => {
    const newMusic = new Music(req.body);
    
        try {
            const music = await newMusic.save();
            res.status(201);
            res.json(music);
        } catch (error) {
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur."});
        }
    
    }


exports.deleteAMusic = async (req,res) => {
        try {
            await Music.findByIdAndDelete(req.params.id_music);
            res.status(202);
            res.json({message: "musique supprimée"});
        } catch (error) {
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur."});
        }
    
    }

exports.deleteAll = async (req,res) => {
    const musicDelete = new Music(req.body)
        try {
            const music = await Music.deleteMany();
            res.status(202);
            res.json({message: "toutes les musiques ont eté supprimées"});
        } catch (error) {
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur."});
        }
    
    }



exports.updateAMusic = async (req,res) => {
    const musicUpdate = new Music(req.body)

        try {
            const music = await Music.findByIdAndUpdate(req.params.id_music, {firstname:musicUpdate.firstname, lastname:musicUpdate.lastname, url:musicUpdate.url});
            res.status(203);
            res.json(music);
        } catch (error) {
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur."});
        }
    
    }


    exports.updateAMusic = async (req,res) => {   
            try {
                const music = await Music.findByIdAndUpdate(req.params.id_music, req.body, {new: true});
                res.status(203);
                res.json(music);
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
        