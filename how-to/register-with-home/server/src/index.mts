import express from "express";
import path from "path";
import * as url from "url";

const app = express();

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const mainPath = path.join(__dirname, "..", "..", "public");
const commonPath = path.join(__dirname, "..", "..", "public", "common");
const port = 8080;

console.log(`Main Path / = ${mainPath}`);
console.log(`Common Path /common = ${commonPath}`);
app.use(express.static(mainPath));
app.use("/common", express.static(commonPath));
app.listen(port, () => {
	console.log("server is listening on port", port);
});
