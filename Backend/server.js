// server.js
import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from "url";

// ESM replacements for __dirname and __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults(); // safe defaults (no 'public' issue)

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);

server.listen(port, "0.0.0.0", () => {
  console.log(`JSON Server is running on port ${port}`);
});
