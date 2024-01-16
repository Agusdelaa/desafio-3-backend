import { ProductManager } from "./ProductManager.js";
import  express  from "express"; 

const PORT = 8080
const PATH = "./src/productos.json"

const pm = new ProductManager(PATH)
const app = express()




app.listen(PORT, () =>{
    console.log(`Servidor ONLINE escuchando en el puerto ${PORT}`)
})

app.get("/products", async (req, res) => {
    try {
        const limit = parseInt(req.query.limit)
        const products = await pm.getProducts(limit)
        res.json(products)

    } catch (error) {
        res.json(error.message)
    }
})
app.get("/products/:pid", async (req, res) => {
    try {
        const productId = parseInt(req.params.pid)
        console.log(parseInt(req.params.pid))
        const product = await pm.getProductsById(productId)
        res.json(product)

    } catch (error) {
        res.json(error.message)
    }
})

