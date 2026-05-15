let total = 0;
let count = 0;

/* ================= MOBILE MENU ================= */

function toggleMenu(){

    document
    .getElementById("mobileMenu")
    .classList.toggle("active");

}

/* ================= CLOSE MENU ON RESIZE ================= */

window.addEventListener("resize", () => {

    if(window.innerWidth > 768){

        document
        .getElementById("mobileMenu")
        .classList.remove("active");

    }

});

/* ================= CHANGE QUANTITY ================= */

function changeQty(id, value){

    let qtyElement =
        document.getElementById(id);

    let currentQty =
        parseInt(qtyElement.innerText);

    if(currentQty + value >= 1){

        qtyElement.innerText =
            currentQty + value;

    }

}

/* ================= ADD TO CART ================= */

function addToCart(name, price, qtyId){

    let qty =
        parseInt(
            document.getElementById(qtyId).innerText
        );

    total += price * qty;
    count += qty;

    document.getElementById("total").innerText =
        total;

    document.getElementById("cart-count").innerText =
        count;

    const cartItems =
        document.getElementById("cart-items");

    if(cartItems.innerHTML.includes("No items")){

        cartItems.innerHTML = "";

    }

    cartItems.innerHTML +=
        `<p>${name} x${qty} — ₱${price * qty}</p>`;

}

/* ================= CHECKOUT ================= */

function checkoutOrder(){

    if(count === 0){

        alert("Your cart is empty 🌸");
        return;

    }

    let paymentMethod =
        document.getElementById("paymentMethod").value;

    alert(
        "Order placed successfully using " +
        paymentMethod +
        " 🌸"
    );

    total = 0;
    count = 0;

    document.getElementById("cart-items").innerHTML =
        "No items yet";

    document.getElementById("total").innerText = 0;

    document.getElementById("cart-count").innerText = 0;

}

/* ================= CUSTOM ORDER ================= */

function customOrder(event){

    event.preventDefault();

    alert(
        "Your custom bouquet order has been sent 💌"
    );

}