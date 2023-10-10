import express from "express";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 80;

// Serve Angular public files
app.use("/", express.static(path.join(__dirname, "public")));

// Handle Angular's client-side routing
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => console.log(`Angular app listening on port ${PORT}!`));
