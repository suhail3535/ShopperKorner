function checkout() {
  let flag =JSON.parse( localStorage.getItem('Cart'));
  
  if (flag.length==0){
      alert('Nothing to Order');
      window.location.href='/card.html'
  }else{
      window.location.href = './project.html';
  }
}



let order_item = JSON.parse(localStorage.getItem("Cart"));



if (order_item == undefined || order_item.length == 0) {
  let cont = document.getElementById("container");

  let div = document.createElement("div");
  div.setAttribute("class", "box1");

  let img = document.createElement("img");
  img.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_XDSlXLgGNhG3BV2xN7BnswolMUB6Iqs39g&usqp=CAU";

  let p = document.createElement("p");
  p.innerText = "Your shopping cart is empty";

  let btn = document.createElement("button");
  btn.innerText = "Go shoping";
  btn.setAttribute("class", "btn1");
  btn.addEventListener("click", function () {
    window.location.href = "index.html";
  });

  div.append(img, p, btn);
  cont.append(div);
} else {
  
  let cont = document.getElementById("container");
  cont.innerHTML = null;
  display(order_item);

  function display(order_item) {
    order_item.forEach(function (elm, index) {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      td1.setAttribute("class", "ptag");
      let img = document.createElement("img");
      img.setAttribute("src", elm.image);
      img.setAttribute("id", "img_siz");
      let divs = document.createElement("div");
      let p1 = document.createElement("p");
      p1.innerText = elm.desc;
      td1.append(img,divs,p1);
  
      let td2 = document.createElement("td");
      let p2 = document.createElement("p");
      p2.innerText = "$" + elm.price;
      let p3 = document.createElement("p");
      p3.innerText = elm.prevPrice;
      p3.style.textDecoration = "line-through";
      td2.append(p2);
      td2.append(p3);

      let td3 = document.createElement("td");
      td3.innerText = 1;

      let td4 = document.createElement("td");
      td4.innerText = "$" + elm.price;
      td4.setAttribute("class", "subtotal");

      let td5 = document.createElement("td");

      let p4 = document.createElement("p");
      p4.setAttribute("class", "merge");

      p4.innerText = "Delete";
      p4.style.color = "red";
      p4.style.cursor = "pointer";
      p4.setAttribute("class", "deleteText");
      p4.addEventListener("click", function () {
        deleteItem(elm, index);
      });
      td5.append(p4);
      tr.append(td1, td2, td3, td4, td5);
      document.querySelector("tbody").append(tr);

      function deleteItem(elm, index) {
        event.target.parentNode.remove();
        order_item.splice(index, 1);
        localStorage.setItem("Cart", JSON.stringify(order_item));
        window.location.reload();
      }
    });
  }



  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < order_item.length; i++) {
    let save = order_item[i].prevPrice.trim().split("");
    let save1 = save.slice(1, save.length - 1).join("");

    sum1 = sum1 + Number(order_item[i].price);
    sum2 = sum2 + Number(save1);
  }

  let t_save = Math.ceil(sum2 - sum1);

  document.querySelector(".totalPrice").innerText = "$" + Math.ceil(sum1);
  document.querySelector(".offer").innerText = "$" + Math.ceil(t_save);

  document.querySelector(".paytotal").innerText = "$" + Math.ceil(sum1);

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }

  let bill = {
    your_subtotal: Math.ceil(sum1),
    saving: Math.ceil(t_save),
    Total: Math.ceil(sum1),
  };
  console.log(bill);
  localStorage.setItem("order_bill", JSON.stringify(bill));

  

}


