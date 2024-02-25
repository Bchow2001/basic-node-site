import http from "node:http";
import * as fs from "fs";

const PORT = 8080;

const server = http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "text/html" });
	if (req.url === "/") {
		fs.readFile("index.html", (err, data) => {
			if (err) throw err;
			res.write(data);
			res.end();
		});
	} else if (req.url === "/about") {
		fs.readFile("about.html", (err, data) => {
			if (err) throw err;
			res.write(data);
			res.end();
		});
	} else if (req.url === "/contact-me") {
		fs.readFile("contact-me.html", (err, data) => {
			if (err) throw err;
			res.write(data);
			res.end();
		});
	} else {
		fs.readFile("404.html", (err, data) => {
			if (err) throw err;
			res.write(data);
			res.end();
		});
	}
});

server.listen(PORT);
