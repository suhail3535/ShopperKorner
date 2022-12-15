// Post Functionality
let postBtn = document.getElementById("postBtn");
postBtn.addEventListener("click", async () => {
  let id = document.getElementById("postId").value;
  let des = document.getElementById("postDes").value;
  let price = document.getElementById("postPrice").value;
  let prevPrice = document.getElementById("postPrev").value;
  let img = document.getElementById("postImg").value;
  let obj = {};
  obj.id = id;
  obj.image = img;
  obj.desc = des;
  obj.price = price;
  obj.prevPrice = prevPrice;

  let res = await fetch(
    "https://636a3f79b10125b78fd51599.mockapi.io/products",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }
  );
  console.log(res)
});
