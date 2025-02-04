import express from 'express';
import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js'

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.listen(8080, ()=> {console.log('Listening on port 8080')});

app.use(express.static('./src/public'))
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

export default app;
