// ================================
// GLOW BEAUTY STORE - script.js
// ================================

// Dark Mode
const darkBtn = document.getElementById("dark-btn");

if (darkBtn) {
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        const icon = darkBtn.querySelector("i");

        if (document.body.classList.contains("dark")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    });
}

// ================================
// CART
// ================================

let cartCount = 0;

const cartDisplay = document.getElementById("cart-count");

const cartButtons = document.querySelectorAll(".product-card button");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        if (cartDisplay) {
            cartDisplay.innerText = cartCount;
        }

        button.innerText = "Added ✓";

        button.style.background = "#28a745";

        setTimeout(() => {

            button.innerText = "Add to Cart";

            button.style.background = "#e91e63";

        }, 1200);

    });

});

// ================================
// SEARCH
// ================================

const searchInput = document.querySelector(".search-box input");

const productCards = document.querySelectorAll(".product-card");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value = searchInput.value.toLowerCase();

        productCards.forEach(card => {

            const name = card.querySelector("h3").innerText.toLowerCase();

            if (name.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

// ================================
// SMOOTH SCROLL
// ================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ================================
// PAGE LOADED
// ================================

window.addEventListener("load", () => {

    console.log("Glow Beauty Store Loaded Successfully");

});


// ====================================
// GLOW BEAUTY STORE - script.js Part 2
// ====================================

// -------------------------------
// Wishlist
// -------------------------------

const heartIcon = document.querySelector(".fa-heart");

let wishlistCount = 0;

if (heartIcon) {

    heartIcon.addEventListener("click", () => {

        wishlistCount++;

        alert("Added to Wishlist ❤️");

        heartIcon.style.color = "#e91e63";

    });

}

// -------------------------------
// Save Cart Count
// -------------------------------

if(localStorage.getItem("cartCount")){

    cartCount = Number(localStorage.getItem("cartCount"));

    if(cartDisplay){

        cartDisplay.innerText = cartCount;

    }

}

cartButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        localStorage.setItem("cartCount",cartCount);

    });

});

// -------------------------------
// Scroll Animation
// -------------------------------

const cards=document.querySelectorAll(".product-card,.category,.review-card");

window.addEventListener("scroll",()=>{

    cards.forEach(card=>{

        const position=card.getBoundingClientRect().top;

        const screen=window.innerHeight;

        if(position<screen-100){

            card.style.opacity="1";

            card.style.transform="translateY(0px)";

        }

    });

});

// -------------------------------
// Back To Top Button
// -------------------------------

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="20px";
topBtn.style.bottom="20px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#e91e63";
topBtn.style.color="#fff";
topBtn.style.fontSize="20px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// -------------------------------
// Newsletter Button
// -------------------------------

const subscribeBtn=document.querySelector(".subscribe-box button");

if(subscribeBtn){

subscribeBtn.addEventListener("click",()=>{

const email=document.querySelector(".subscribe-box input").value;

if(email===""){

alert("Please enter your email.");

}else{

alert("Thank you for subscribing! 💖");

document.querySelector(".subscribe-box input").value="";

}

});

}

// -------------------------------
// Contact Button Alert
// -------------------------------

console.log("All JavaScript Loaded Successfully 🚀");
