const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.resolve(process.cwd());
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".mp3": "audio/mpeg"
};

http
  .createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split("?")[0]).replace(/^\/+/, "");
    const requested = path.resolve(root, urlPath === "" ? "index.html" : urlPath);

    if (!requested.startsWith(root + path.sep) && requested !== root) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }

    fs.readFile(requested, (error, data) => {
      if (error) {
        res.writeHead(404);
        res.end("Not found");
        return;
      }

      res.writeHead(200, { "Content-Type": types[path.extname(requested)] || "application/octet-stream" });
      res.end(data);
    });
  })
  .listen(4173, "127.0.0.1");
