// --- DOM ELEMENTS ---
const cartBtn = document.getElementById('cart-btn');
const closeCart = document.getElementById('close-cart');
const cartSidebar = document.getElementById('cart-sidebar');
const addToCartBtns = document.querySelectorAll('.add-to-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const filterBtns = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.product-card');

let cart = [];

// --- OPEN / CLOSE CART ---
cartBtn.addEventListener('click', () => cartSidebar.classList.add('open'));
closeCart.addEventListener('click', () => cartSidebar.classList.remove('open'));

// --- ADD TO CART ---
addToCartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const name = e.target.getAttribute('data-name');
        const price = parseFloat(e.target.getAttribute('data-price'));
        
        addToCart(name, price);
    });
});

function addToCart(name, price) {
    cart.push({ name, price });
    updateCartUI();
}

function updateCartUI() {
    // Update count
    cartCount.innerText = cart.length;
    
    // Clear container
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-msg">Your cart is empty</p>';
        cartTotal.innerText = '0.00';
        return;
    }
    
    let total = 0;
    
    // Populate cart items
    cart.forEach((item, index) => {
        total += item.price;
        const itemEl = document.createElement('div');
        itemEl.classList.add('cart-item');
        itemEl.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
        `;
        cartItemsContainer.appendChild(itemEl);
    });
    
    cartTotal.innerText = total.toFixed(2);
}

// --- FILTER PRODUCTS ---
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add to clicked button
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        products.forEach(product => {
            const category = product.getAttribute('data-category');
            if (filterValue === 'all' || filterValue === category) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});
