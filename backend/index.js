const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");

app.use(cors());
app.use(express.json());
app.use(express.static("avatars"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./avatars");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === "image/jpeg") {
//     cb(null, true);
//   } else {
//     cb(null, false);
//     return cb(new Error("Only .jpeg format allowed!"));
//   }
// };

const upload = multer({ storage: storage });

app.post("/info", upload.single("file"), (req, res) => {
  res.status(200).json("Success");
});

app.listen(3003, () => {
  console.log("Connected to port 3003");
});
