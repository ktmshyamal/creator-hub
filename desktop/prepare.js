// Copies the web app into ./app so it ships inside the installer.
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
const out = path.join(__dirname, "app");
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(path.join(out, "icons"), { recursive: true });
fs.copyFileSync(path.join(root, "index.html"), path.join(out, "index.html"));
for (const f of fs.readdirSync(path.join(root, "icons"))) fs.copyFileSync(path.join(root, "icons", f), path.join(out, "icons", f));
console.log("app files ready");
