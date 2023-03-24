import express from "express";
import { 
    getAllImage,
    createImage,
    getImageById,
    updateImage
} from "../controllers/Image.js";
 
const router = express.Router();
 
router.get('/', getAllImage);
router.get('/:id', getImageById);
router.post('/', createImage);
router.patch('/:id', updateImage);
 
export default router;
