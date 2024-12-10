let products = [
    { id: 1, name: "Laptop", price: 799.99, stock: 10, image: "assests/laptop_586.webp" },
    { id: 2, name: "Smartphone", price: 499.99, stock: 5, image: "assests/imgs-01.jpg" },
    { id: 3, name: "Headphones", price: 199.99, stock: 20, image: "assests/images.jpeg" },
    { id: 4, name: "Smartwatch", price: 150.99, stock: 15, image: "assests/49.webp" },
    { id: 5, name: "Tablet", price: 299.99, stock: 8, image: "assests/download.jpeg" },
    { id: 6, name: "Wireless Mouse", price: 29.99, stock: 50, image: "assests/download (1).jpeg" },
    { id: 7, name: "Keyboard", price: 59.99, stock: 30, image: "assests/download (17).jpeg" },
    { id: 8, name: "Monitor", price: 189.99, stock: 12, image: "assests/download (2).jpeg" },
    { id: 9, name: "Charger", price: 19.99, stock: 100, image: "assests/download (3).jpeg" },
    { id: 10, name: "Power Bank", price: 39.99, stock: 50, image: "assests/shopping.webp" },
    { id: 11, name: "Bluetooth Speaker", price: 79.99, stock: 15, image: "assests/download (4).jpeg" },
    { id: 12, name: "Laptop Bag", price: 49.99, stock: 25, image: "assests/download (5).jpeg" },
    { id: 13, name: "External Hard Drive", price: 99.99, stock: 10, image: "assests/images (1).jpeg" },
    { id: 14, name: "Webcam", price: 60.99, stock: 15, image: "assests/download (6).jpeg" },
    { id: 15, name: "Router", price: 45.99, stock: 20, image: "assests/download (7).jpeg" },
    { id: 16, name: "AirPods", price: 159.99, stock: 5, image: "assests/download (8).jpeg" },
    { id: 17, name: "Game Console", price: 499.99, stock: 7, image: "assests/download (9).jpeg" },
    { id: 18, name: "Camera", price: 299.99, stock: 8, image: "assests/download (10).jpeg" },
    { id: 19, name: "Smart TV", price: 699.99, stock: 3, image: "assests/download (11).jpeg" },
    { id: 20, name: "Printer", price: 129.99, stock: 10, image: "assests/download (12).jpeg" },
    { id: 21, name: "Digital Thermometer", price: 29.99, stock: 40, image: "assests/download (13).jpeg" },
    { id: 22, name: "Smart Light Bulb", price: 22.99, stock: 50, image: "assests/download (14).jpeg" },
    { id: 23, name: "Electric Fan", price: 49.99, stock: 20, image: "assests/download (15).jpeg" },
    { id: 24, name: "Washing Machine", price: 349.99, stock: 5, image: "assests/download (16).jpeg" },
    { id: 25, name: "Refrigerator", price: 499.99, stock: 4, image: "assests/images (2).jpeg" }
];

// Render Products on Home Page
function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear any existing products
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <p>Stock: ${product.stock}</p>
        `;
        productList.appendChild(productDiv);
    });
}

// Render Products on Order Page
function renderOrderPage() {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = ''; // Clear any existing products
    products.forEach(product => {
        const orderDiv = document.createElement('div');
        orderDiv.classList.add('order-item');
        orderDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <p>Stock: ${product.stock}</p>
            <button onclick="orderProduct(${product.id})">Order</button>
        `;
        orderList.appendChild(orderDiv);
    });
}

// Order Product Function
function orderProduct(id) {
    const product = products.find(p => p.id === id);
    if (product.stock > 0) {
        product.stock--;
        alert(`You have ordered ₹{product.name}. Stock left: ${product.stock}`);
        renderProducts();  // Update the stock on home page
        renderOrderPage();  // Update the stock on order page
    } else {
        alert(`Sorry, ${product.name} is out of stock.`);
    }
}

// Add Product Function (For add-item.html)
function addProduct(event) {
    event.preventDefault();
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const stock = document.getElementById('product-stock').value;
    const image = document.getElementById('product-image').value;

    const newProduct = {
        id: products.length + 1,
        name: name,
        price: parseFloat(price),
        stock: parseInt(stock),
        image: image
    };
    products.push(newProduct);
    alert(`${name} has been added to the inventory.`);
    document.getElementById('add-product-form').reset();
}

// Listen for form submission on add-item.html
if (document.getElementById('add-product-form')) {
    document.getElementById('add-product-form').addEventListener('submit', addProduct);
}

// Initialize
if (document.getElementById('product-list')) {
    renderProducts();
}

if (document.getElementById('order-list')) {
    renderOrderPage();
}
