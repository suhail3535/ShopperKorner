let updateBtn = document.getElementById("updateBtn");
updateBtn.addEventListener("click", async () => {
  let id = document.getElementById("updateId").value;
  let des = document.getElementById("updateDes").value;
  let price = document.getElementById("updatePrice").value;
  let prevPrice = document.getElementById("updatePrev").value;
  let image = document.getElementById("updateImg").value;
  let updateCount = localStorage.getItem("updatecount") || 0;

  let obj = {};
  obj.id = id;
  obj.image = image;
  obj.desc = des;
  obj.price = price;
  obj.prevPrice = prevPrice;

  let res = await fetch(
    `https://636a3f79b10125b78fd51599.mockapi.io/products/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }
  );
  if (res.ok) {
    updateCount++;
    localStorage.setItem("updatecount", updateCount);
    alert("Product Updated Successfully✅");
    location.reload()
  }else{
    alert("ProductId Invalid❌")
  }
});

let displaytotalcount = localStorage.getItem("totalcount") || 0;
document.querySelector("#total").innerText = displaytotalcount;
let displayupdatecount = localStorage.getItem("updatecount") || 0;
console.log(displayupdatecount)
document.querySelector("#updated").innerText = displayupdatecount;
let displaypostcount = localStorage.getItem("postcount") || 0;
document.querySelector("#added").innerText = displaypostcount;
let displaycount = localStorage.getItem("deletecount") || 0;
document.querySelector("#removed").innerText = displaycount;
