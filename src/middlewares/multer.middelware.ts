import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
   // sets where file is saved
   destination: function (req, file, cb) {
      cb(null, "./public/temp");
   },
   // set filename unique filename format: fieldname + '-'+ nowtime + nine digit random number + ext;
   filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(
         null,
         file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
      );
   },
});

export const upload = multer({
   storage: storage,
});
