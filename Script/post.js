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

  if(id=="" && des=="" && price =="" && prevPrice=="" && img ==""){
  alert("Enter Valid Details")
  }
  else{
    let postcount=localStorage.getItem("postcount") || 0;
  let res = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  console.log(res);
  if(res.ok==true){
    postcount++;
    localStorage.setItem("postcount",postcount);
   alert("Item added")
    location.reload();
  
  }

  }
});
///counts
countitems()
async function countitems(){
  try{
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    localStorage.setItem("totalcount",data.length)
  }
  catch(err){
    console.log(err)
  }
}
let displaytotalcount=localStorage.getItem("totalcount") || 0;
document.querySelector("#total").innerText=displaytotalcount;
let displayupdatecount=localStorage.getItem("updatecount") || 0;
document.querySelector("#updated").innerText=displayupdatecount;
let displaypostcount=localStorage.getItem("postcount") || 0;
document.querySelector("#added").innerText=displaypostcount;
let displaycount=localStorage.getItem("deletecount") || 0;
document.querySelector("#removed").innerText=displaycount;