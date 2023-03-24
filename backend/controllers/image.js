import Image from "../models/imageModel.js";

export const getAllImage = async (req, res) => {
    try {
        const images = await Image.findAll();
        res.json(images);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const getImageById = async (req, res) => {
    try {
        const Image = await Image.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(Image[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const createImage = async (req, res) => {
    try {
        await Image.create(req.body);
        res.json({
            "message": "Image Created" + req.body
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateImage = async (req, res) => {
    try {
        await Image.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Image Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}


