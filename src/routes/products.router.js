import { Router } from 'express';

const router = Router();

const products = [
    {id:1, name:'producto 1', price:200},
    {id:2, name:'producto 2', price:400},
    {id:3, name:'producto 3', price:600},
]

router.get("/", (req, res) => {
    res.send("Bienvenido al servidor de productos y carritos");
});

router.get('/api/products', (req, res)=>{
    res.json(products)
});

router.get('/api/products/:pid', (req, res)=>{
    const productsId = parseInt(req.params.pid);
    const product = products.find(p => p.id === productsId)

    if (!product){return res.status(404).json({ message: "Producto no encontrado"});}
    
    res.json(product);
});

// router.post

export default router;