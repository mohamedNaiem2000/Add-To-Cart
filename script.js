const product = [
    {
        id: 1,
        image: '../images/jacket.webp',
        title: 'jacket',
        price: 120,
    },
    {
        id: 2,
        image: '../images/tishirt.avif',
        title: 'Tishirt',
        price: 150,
    },
    {
        id: 3,
        image: '../images/blouse.webp',
        title: 'blouse',
        price: 250,
    },
    {
        id: 4,
        image: '../images/trouser.jpg', 
        title: 'trouser',
        price: 100,
    }
];


const categories = [...new Set(product.map((item) => { return item }))]

let i = 0;
document.querySelector("#root").innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class="box">
            <div class="img-box">
            <img class="images" src=${image}></img>
            </div>
            <div class="bottom">
            <p>${title}</p>
            <h2>$ ${price}.00</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add To Cart</button>" +
        ` </div>
            </div>`
    )
}).join('');


var cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}

function deletelement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a) {
    let j = 0,total=0;
    document.querySelector(".count").innerHTML=cart.length;
    if (cart.length === 0) {
        document.querySelector(".cartitem").innerHTML = "your cart is empty";
        document.querySelector("#total").innerHTML="$0.00";
    }
    else {
        document.querySelector(".cartitem").innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total=total+price;
            document.querySelector("#total").innerHTML="$"+total+".00";
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                      <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:22px;'>${title}</p>
                    <h2 style='font-size:20px;'>$ ${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='deletelement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }
}