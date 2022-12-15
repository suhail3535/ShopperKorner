// Delete Functionality
let deleteBtn = document.getElementById("submit");

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
      }
    );
    if (res.ok) {
        swal("Deleted", "Item Deleted Successfully", "success");
    }
   
  } catch (error) {
    console.log(error);
  }
});


