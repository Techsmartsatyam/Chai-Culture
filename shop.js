
let cart=[];

function toggleCart(){
  document.getElementById("cart").classList.toggle("active");
}

function addToCart(name,price){
  cart.push({name,price});
  render();
}

function render(){
  let items=document.getElementById("items");
  let total=0;
  items.innerHTML="";
  cart.forEach((c,i)=>{
    total+=c.price;
    items.innerHTML+=`<div class="cart-item">
      <span>${c.name}</span>
      <button onclick="remove(${i})">x</button>
    </div>`;
  });
  document.getElementById("total").innerText=total;
  document.getElementById("count").innerText=cart.length;
}

function remove(i){
  cart.splice(i,1);
  render();
}

function search(val){
  document.querySelectorAll(".card").forEach(c=>{
    c.style.display=c.dataset.name.includes(val.toLowerCase())?"block":"none";
  });
}

function buyNow(name,price){
  cart=[{name,price}];
  render();
  checkout();
}

function checkout(){
  document.getElementById("checkoutModal").style.display="flex";
  document.getElementById("modalContent").innerHTML=`
    <h3>Payment Method</h3>
    <div class="payment">
      <label><input type="radio" name="pay" checked> Cash on Delivery</label>
      <label><input type="radio" name="pay"> Online Payment</label>
    </div>
    <button class="confirm" onclick="confirmOrder()">Confirm Order</button>
  `;
}

function confirmOrder(){
  document.getElementById("modalContent").innerHTML=`
    <div class="success">
      <h2>Order Placed 🎉</h2>
      <p>Your premium chai will be delivered soon.</p>
    </div>
  `;
  cart=[];
  render();
}
