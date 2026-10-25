// Builds ./www: the web app with the PDF library bundled so it works offline.
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
const www = path.join(__dirname, "www");
fs.rmSync(www, { recursive: true, force: true });
fs.mkdirSync(path.join(www, "icons"), { recursive: true });
let html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const cdn = /<script src="https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/jspdf\/2\.5\.1\/jspdf\.umd\.min\.js"><\/script>/;
if (!cdn.test(html)) throw new Error("jsPDF script tag not found");
html = html.replace(cdn, '<script src="jspdf.umd.min.js"></script>');
html = html.replace(/<link rel="manifest"[^>]*>\n?/, "");
html = html.replace(/<script>if \("serviceWorker"[\s\S]*?<\/script>/, "");
fs.writeFileSync(path.join(www, "index.html"), html);
fs.copyFileSync(path.join(__dirname, "node_modules", "jspdf", "dist", "jspdf.umd.min.js"), path.join(www, "jspdf.umd.min.js"));
for (const f of fs.readdirSync(path.join(root, "icons"))) fs.copyFileSync(path.join(root, "icons", f), path.join(www, "icons", f));
console.log("www ready");
