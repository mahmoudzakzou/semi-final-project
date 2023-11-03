const nav__content=document.querySelector((".nav__content"))
window.addEventListener("scroll",function(){
    nav__content.classList.toggle("sticky",window.scrollY >80)
})
let menu =document.querySelector("#menu-icon") 
let navlist =document.querySelector(".navlist")
menu.onclick=()=>{
    menu.classList.toggle("bx-x")
   navlist.classList.toggle("open")
}
window.onscroll=()=>{
    menu.classList.toggle("bx-x")
   navlist.classList.remove("open")
}
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Blueberry Honey',
        img: 'p1.png',
        price: 1000
    },
    {
        id: 2,
        name: 'Blueberry Honey',
       img: 'p2.png',
        price: 3000
    },
    {
        id: 3,
        name: 'Blueberry Honey',
       img: 'p3.png',
        price:4000
    },
    {
        id: 4,
        name: 'Blueberry Honey',
        img: 'p4.png',
        price: 5000
    },
    {
        id: 5,
        name: 'Blueberry Honey',
        img: 'p5.png',
        price: 3000
    },
    {
        id: 6,
        name: 'Blueberry Honey',
        img: 'p6.png',
        des:'It is a long estbablished fact that a reader',
        price:1000
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
           <img src="./assets/img/${value.img}" alt="">
                <h3>${value.name}</h3>
                <p>It is a long estbablished fact that a reader</p>
                <div class="in-text">
                  <div class="price">
                    <h6>${value.price.toLocaleString()}</h6>
                  </div>
                  <button onclick="addToCard(${key}) " class="text-decoration-non btn btn-outline-warning rounded-5">Add To Card</button>
                </div>
            `;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
               <img src="./assets/img/${value.img}" alt="">
                <h3>${value.name}</h3>
                <p>It is a long estbablished fact that a reader</p>
                <div class="in-text">
                  <div class="price">
                    <h6>${value.price.toLocaleString()}</h6>
                  </div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}


