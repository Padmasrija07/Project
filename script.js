// ================= CART DATA =================

let cart = JSON.parse(localStorage.getItem("beautyCart")) || [];


// ================= SAVE CART =================

function saveCart() {
    localStorage.setItem("beautyCart", JSON.stringify(cart));
}


// ================= UPDATE CART COUNT =================

function updateCartCount() {

    const cartCount = document.getElementById("cart-count");

    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}


// ================= ADD TO CART =================

const addButtons = document.querySelectorAll(".add-cart");

addButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const productCard = button.closest(".product-card");

        const name =
            productCard.querySelector("h3").textContent;

        const priceText =
            productCard.querySelector("p").textContent;

        const price =
            parseInt(priceText.replace(/[^\d]/g, ""));

        const image =
            productCard.querySelector("img").getAttribute("src");


        const product = {
            name: name,
            price: price,
            image: image
        };


        cart.push(product);

        saveCart();

        updateCartCount();

        button.textContent = "Added ✓";

        setTimeout(function() {
            button.textContent = "Add to Cart";
        }, 1000);

    });

});


// ================= DISPLAY CART =================

function displayCart() {

    const cartItems =
        document.getElementById("cart-items");

    const totalItems =
        document.getElementById("total-items");

    const totalPrice =
        document.getElementById("total-price");


    if (!cartItems) {
        return;
    }


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty 🛒</p>";

        if (totalItems) {
            totalItems.textContent = "0";
        }

        if (totalPrice) {
            totalPrice.textContent = "₹0";
        }

        return;
    }


    let total = 0;


    cart.forEach(function(product, index) {

        total += product.price;


        const item = document.createElement("div");

        item.className = "cart-item";


        item.innerHTML = `
            <img src="${product.image}" 
                 alt="${product.name}">

            <div>
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>

                <button 
                    class="remove-btn"
                    onclick="removeFromCart(${index})">
                    Remove
                </button>
            </div>
        `;


        cartItems.appendChild(item);

    });


    if (totalItems) {
        totalItems.textContent = cart.length;
    }


    if (totalPrice) {
        totalPrice.textContent = "₹" + total;
    }

}


// ================= REMOVE FROM CART =================

function removeFromCart(index) {

    cart.splice(index, 1);

    saveCart();

    updateCartCount();

    displayCart();

}


// ================= CHECKOUT =================

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }


    alert(
        "Thank you for shopping with Glow Naturally! 💗"
    );


    cart = [];

    saveCart();

    updateCartCount();

    displayCart();

}


// ================= SEARCH =================

const searchIcon =
    document.querySelector(".header-icons span");


if (searchIcon) {

    searchIcon.addEventListener("click", function() {

        const search =
            prompt("Search for a beauty product:");

        if (search) {

            alert(
                "Searching for: " + search
            );

        }

    });

}


// ================= WISHLIST =================

const headerIcons =
    document.querySelectorAll(".header-icons span");


if (headerIcons.length > 1) {

    headerIcons[1].addEventListener(
        "click",
        function() {

            alert(
                "Your wishlist is currently empty ❤️"
            );

        }
    );

}


// ================= PAGE LOAD =================

updateCartCount();

displayCart();
