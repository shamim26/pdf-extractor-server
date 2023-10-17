const express = require("express");
const app = express();
const cors = require("cors");
const pdfParse = require("pdf-parse");
const fileUpload = require("express-fileupload");
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(fileUpload());

app.get("/", (req, res) => {
  res.send("app is running");
});

app.post("/file", (req, res) => {
  const pdf = req.files.pdfFile;
  if (pdf) {
    pdfParse(pdf).then((result) => {
      res.send(result.text);
    });
  } else {
    res.send("select a pdf file");
  }
});

app.listen(port, () => console.log("listening", port));
