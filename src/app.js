import express from "express";
import productsRouter from "./routes/products.js";

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.listen(8080, ()=> {console.log('Listening on port 8080')});


app.get("/", (req, res) => {
        res.send("Bienvenido al servidor de productos y carritos");
    }
);

//PROBLEMAS DE RUTAS JAJAJA
app.use("/api/products", productsRouter);
// app.use('../api/carts.js', cartsRouter);


export default app;