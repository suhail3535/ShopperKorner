// Delete Functionality
let deleteBtn = document.getElementById("submit");
let deletecount= localStorage.getItem("deletecount") || 0;

deleteBtn.addEventListener("click", async () => {
  try {
    let deleteId = document.getElementById("deleteId").value;
    let res = await fetch(
      `https://636a3f79b10125b78fd51599.mockapi.io/products/${deleteId}`,
      {
        method:"DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      
    if (res.ok) {
      deletecount++;
        localStorage.setItem("deletecount",deletecount);
        setTimeout(()=>{
          swal("Deleted", "Item Deleted Successfully", "success");
        },1000)  ;
    location.reload();

    }else{
      alert("ProductID Not Available❌")

    }
   
  } catch (error) {
    console.log(error);
  }
});
let displaypostcount=localStorage.getItem("postcount") || 0;
document.querySelector("#added").innerText=displaypostcount;
let displaycount=localStorage.getItem("deletecount")
document.querySelector("#removed").innerText=displaycount;


