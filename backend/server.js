import express from 'express'
import db from "./config/database.js";
import ImageRoutes from "./routes/index.js";
import cors from 'cors'
import multer, { diskStorage } from 'multer'
import Image from './models/imageModel.js';

const app = express()
const port = 5000

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
  };
app.use(cors(corsOptions));
  

try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}

app.use('/Image', ImageRoutes);

const storage = diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../test_upload_image_v2/public/Upload/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})
const upload = multer({ storage: storage })
app.use(cors())
try{
    app.post('/public/Upload', upload.single('file'), function (req, res) {
        res.json({msg:"Upload OK"})
         Image.create({
            url : "/Upload/",
            image_name : req.file.filename
          });
      })
}catch(error){
    res.json({msg:"Connect Fail"})
}

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})