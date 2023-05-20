const file = require("../models/file")

const uploadImage = async (req, res) =>{
    const fileObj = {
        path : req.file.path,
        name : req.file.originalname
    }
    try{
        const File = await file.create(fileObj)
        return res.status(200).send({path: `http://localhost:5000/file/${File._id}`})
    }catch(error){
        return res.status(500).send({ error:error.message });
    }
}

const downloadImage = async (req, res) =>{
    try{
         const File = await file.findById(req.params.fileId);
         File.downloadContent++;
         await File.save()

         res.download(File.path,File.name);
    }catch(error){
         return res.status(500).send({ error: error.message });
    }
}


module.exports ={uploadImage , downloadImage }