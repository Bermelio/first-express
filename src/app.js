import express from "express";
import productsRouter from "./routes/products.router.js";

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.listen(8080, ()=> {console.log('Listening on port 8080')});


app.use('/', productsRouter);

export default app;
