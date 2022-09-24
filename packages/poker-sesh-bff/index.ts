import express from "express";

const app = express();
const port = 8080;

app.get( "/", ( req, res ) => {
	console.log(req);
	res.send("Hello World");
});

app.listen(port, () => {
	console.info(`poker-sesh-bff listening on port: ${port}`);  
});
