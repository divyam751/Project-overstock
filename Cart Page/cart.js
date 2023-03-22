var cartC = JSON.parse(localStorage.getItem("cartArr")) || [];
var cart2C = JSON.parse(localStorage.getItem("cartArr1")) || [];
// var cart3C = JSON.parse(localStorage.getItem("aadToCart3")) || [];

var deleteArrC = JSON.parse(localStorage.getItem("deleteArr")) || [];
var cartValC = 0;
var cartVal1C = 0;
var cartVal2C = 0;
// var cartVal3C = 0;
var totalIC = 0;
if (cartC.length === 0 && cart2C.length === 0 && cart3C.length === 0) {
  document.querySelector("#mainC").textContent = "Add Some Products To Cart";
  totalPriceC();
} else {
  displayCart1C();
  displayCart2C();
  // displayCart3C();
  totalPriceC();
}

function displayCart1C() {
  document.querySelector("#mainC").textContent = "";
  cartC.map(function (elem, index) {
    var divC = document.createElement("div");
    var imageC = document.createElement("img");

    imageC.setAttribute("class", "imageC");
    imageC.setAttribute("src", elem.image_url);
    imageC.setAttribute("alt", elem.name);
    var h5C = document.createElement("p");
    h5C.textContent = elem.name;

    var boxC = document.createElement("div");
    boxC.setAttribute("class", "boxcart");

    var qytC = document.createElement("p");
    qytC.textContent = "Qty : 1";

    var priceC = document.createElement("b");
    priceC.textContent = "INR " + elem.price;

    cartVal1C += elem.price;

    var removeC = document.createElement("button");
    removeC.textContent = "Remove";
    removeC.setAttribute("class", "removeC");
    removeC.addEventListener("click", function () {
      removeItem1C(elem, index);
    });

    var saveC = document.createElement("p");
    saveC.textContent = "Save For Later";

    boxC.append(h5C, qytC, priceC, removeC, saveC);
    divC.append(imageC, boxC);
    divC.setAttribute("class", "cartProdC");
    document.querySelector("#mainC").append(divC);
  });
}

function removeItem1C(elem, index) {
  cartC.splice(index, 1);
  localStorage.setItem("cartArr", JSON.stringify(cartC));
  window.location.reload();
  console.log("hi");

  displayCart1C();
}

function displayCart2C() {
  document.querySelector("#main1C").textContent = "";

  cart2C.map(function (elem, index) {
    var div = document.createElement("div");
    var image = document.createElement("img");

    image.setAttribute("class", "imageC");
    image.setAttribute("src", elem.image_url);
    image.setAttribute("alt", elem.name);
    var h5 = document.createElement("p");
    h5.textContent = elem.name;

    var box = document.createElement("div");
    box.setAttribute("class", "boxcart");

    var qyt = document.createElement("p");
    qyt.textContent = "Qty : 1";

    var price = document.createElement("b");
    price.textContent = "INR " + elem.price;

    cartVal2C += elem.price;

    var remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.setAttribute("class", "removeC");
    remove.addEventListener("click", function () {
      removeItem2C(elem, index);
    });

    var saveC = document.createElement("p");
    saveC.textContent = "Save For Later";

    box.append(h5, qyt, price, remove, saveC);
    div.append(image, box);
    div.setAttribute("class", "cartProdC");
    document.querySelector("#main1C").append(div);
  });
  console.log(cart2C.length);
}

function removeItem2C(elem, index) {
  cart2C.splice(index, 1);
  localStorage.setItem("cartArr1", JSON.stringify(cart2C));
  window.location.reload();
  displayCart2C();
}

// function displayCart3C() {
//   document.querySelector("#main2C").textContent = "";
//   cart3C.map(function (elem, index) {
//     var div = document.createElement("div");
//     var image = document.createElement("img");

//     image.setAttribute("class", "imageC");
//     image.setAttribute("src", elem.image_url);
//     image.setAttribute("alt", elem.name);
//     var h5 = document.createElement("p");
//     h5.textContent = elem.name;

//     var box = document.createElement("div");
//     box.setAttribute("class", "boxcart");

//     var qyt = document.createElement("p");
//     qyt.textContent = "Qty : 1";

//     var price = document.createElement("b");
//     price.textContent = "INR " + elem.price;

//     cartVal3C += elem.price;

//     var remove = document.createElement("button");
//     remove.textContent = "Remove";
//     remove.setAttribute("class", "removeC");
//     remove.addEventListener("click", function () {
//       removeItem3C(elem, index);
//     });

//     var saveC = document.createElement("p");
//     saveC.textContent = "Save For Later";

//     box.append(h5, qyt, price, remove, saveC);
//     div.append(image, box);
//     div.setAttribute("class", "cartProdC");
//     document.querySelector("#main2C").append(div);
//   });
//   console.log(cart3C.length);
// }

// function removeItem3C(elem, index) {
//   cart3C.splice(index, 1);
//   localStorage.setItem("aadToCart3", JSON.stringify(cart3C));
//   window.location.reload();
//   displayCart3C();
// }

function totalPriceC() {
  totalIC = cartC.length + cart2C.length;
  cartValC = cartVal1C + cartVal2C ;

  var totalans = document.getElementById("total-price");
  totalans.innerHTML = cartValC;

  var num = document.getElementById("total-num");
  num.innerHTML = totalIC;

  var promo = document.getElementById("promoC");
  promo.addEventListener("click", addDiscount);

  function addDiscount() {
    var code = document.getElementById("inputC").value;
    if (code === "masai30") {
      document.getElementById("total-price").textContent =
        cartValC-= cartValC*30/100;
    } else {
      alert("Promo Code Is Not Valid");
    }
  }
}

document.getElementById("cartCount").textContent = totalIC;
// document.getElementById("logoC2").addEventListener("click", logoFunC);
// function logoFunC() {
//   window.location.replace("./cart.html");
// }

document.getElementById("paymentC").addEventListener("click", paymentfun);
function paymentfun() {
  window.location.href = "addresspage.html";
}
  

      
