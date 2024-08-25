const order = document.getElementById('order');
const order2 = document.getElementById('order2');

const mainMenu = document.getElementById('mainmenu');
const orderPage = document.getElementById('orderPage');

const addBtn = document.getElementsByClassName('addBtn');
const orderCon = document.getElementById('orderCon');

const dishName = document.getElementsByClassName('name');
const element = document.getElementsByClassName('element');

function orderList(){
    mainMenu.classList.toggle('active');
    orderPage.classList.toggle('active');
    document.body.style.backgroundImage = "url('backcheckout.avif')";
    document.body.style.backgroundSize = "100% 100%";
    document.body.style.backgroundRepeat = "no-repeat";
} 

function orderList2(){
  mainMenu.classList.toggle('active');
  orderPage.classList.toggle('active');
  document.body.style.backgroundImage = "linear-gradient(to bottom right, rgb(218, 188, 114), rgb(252, 252, 237))";
}

order.addEventListener('click', orderList);
order2.addEventListener('click', orderList2);


for (let i = 0; i < element.length; i++) {
    addBtn[i].addEventListener("click", function () {
      let dish = document.createElement("div");
      dish.classList.add("dish");
  
      let lit = document.createElement("li");
      let dishNameElement = document.getElementsByClassName("name")[i];
      lit.innerText = `${dishNameElement.innerText}`;
      dish.appendChild(lit);
  
      orderCon.appendChild(dish);
    });
  }