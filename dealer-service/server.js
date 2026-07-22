const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Dealer Pricing Database
const dealerPrices = [
    { productId: 143, dealerId: 1, dealerName: "Office Supplies Co.", price: 5.49 },
    { productId: 143, dealerId: 2, dealerName: "Paper & More", price: 4.99 },
    { productId: 143, dealerId: 3, dealerName: "Global Wholesale", price: 5.25 },
    { productId: 144, dealerId: 1, dealerName: "Office Supplies Co.", price: 1.99 },
    { productId: 144, dealerId: 4, dealerName: "Stationery Hub", price: 1.75 }
];

// GET /dealers?productId=143 - Returns dealers for a given product
app.get('/dealers', (req, res) => {
    const productId = parseInt(req.query.productId);
    if (!productId) {
        return res.json(dealerPrices);
    }
    const filtered = dealerPrices.filter(item => item.productId === productId);
    res.json(filtered);
});

// GET /dealers/:dealerId/price?productId=143 - Returns price for a specific dealer & product
app.get('/dealers/:dealerId/price', (req, res) => {
    const dealerId = parseInt(req.params.dealerId);
    const productId = parseInt(req.query.productId);
    const item = dealerPrices.find(d => d.dealerId === dealerId && d.productId === productId);
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ error: "Dealer price not found" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Dealer Pricing Microservice (Node.js) running on port ${PORT}`);
});
