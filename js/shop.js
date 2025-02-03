document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            const price = parseFloat(button.getAttribute('data-price'));
            addToCart(product, price);
        });
    });

    function addToCart(product, price) {
        const item = { product, price };
        cart.push(item);
        updateCart();
        alert(`${product} has been added to your cart.`);
    }

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.product} - $${item.price.toFixed(2)}`;
            cartItemsContainer.appendChild(li);
            total += item.price;
        });
        cartTotalContainer.textContent = total.toFixed(2);
    }
});