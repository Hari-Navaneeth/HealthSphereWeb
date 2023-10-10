import express from "express";
const app = express();
const PORT = 80;

app.use("/*", express.static("public"));

app.listen(PORT, () => console.log(`web app listening on port ${PORT}!`));
