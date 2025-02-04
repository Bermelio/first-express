import { Router } from 'express';

const router = Router();

const products = [
    {
    id:1,
    tittle:'Grabadora',
    description:'muy viejo',
    code:'hvyrnweycn',
    price:1700,
    status: Boolean,
    stock: 4,
    category:'music',
    thumbnails:''
    }
]

//router.get

router.get('/', (req, res)=>{
    res.json(products)
});

router.get('/:pid', (req, res)=>{
    const productsId = parseInt(req.params.pid);
    const product = products.find(p => p.id === productsId)

    if (!product){return res.status(404).json({ message: "Producto no encontrado"});}
    
    res.json(product);
});

// router.post

router.post('/create', (req, res)=>{
    const newProduct = req.body;
    products.push(newProduct);
    res.json({message:'Successful new products created'})
});


export default router;