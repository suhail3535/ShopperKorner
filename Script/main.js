// user-name
var win= window.location.href
var userUrl =new URL(win)

var params = new URLSearchParams(userUrl.search)

var username=params.get('username')

var user= document.getElementById('user__name')

if(username==null){
    user.textContent="Sign In"
    // user.style.display = "none"
  }else{
    user.style.display = "block"
    user.textContent= `${username}`

    
  }

//   cart-count

let cart_ls = JSON.parse(localStorage.getItem("Cart"))|| [];
let count = document.getElementById("cartcount");
if(cart_ls == null){
    count.innerText = '0';
}else{
    count.innerText = cart_ls.length;
    
}


// Slider code(Crausal code)
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let arr = ["Images/1.jpg", "Images/2.jpg", "Images/3.jpg", "Images/4.jpg", "Images/5.jpg", "Images/6.jpg","Images/7.jpg"]
let i = 0;

// <...slider_part  code for button next and prev...>
next.addEventListener("click", function () {
    i++;
    if (i > arr.length - 1) {
        i = 0;
    }
    document.getElementById("image").src = arr[i];
})
prev.addEventListener("click", function () {
    i--;
    if (i < 0) {
        i = arr.length - 1;
    }
    document.getElementById("image").src = arr[i];
})
// <......slider_part main function...........>
function slides() {

    document.getElementById("image").src = arr[i];
    if (i < arr.length-1) {
        i++;
    }
    else {
        i = 0;
    }
}
slides()
setInterval(slides,2000);

// landing page fetch API CODE

let bag = [];
let url = "https://636a3f79b10125b78fd51599.mockapi.io/products"
fetch(url).then((res) => res.json())
    .then((data) => {
        bag = data;
        console.log(bag)
        displayTable(bag)
    });


    // <......search function...........>

   function search() {
    let p = document.querySelector("input").value;
  
    let newData = bag.filter(function (ele) {
        return ele.desc.toLowerCase().includes(p.toLocaleLowerCase());
    });
    displayTable(newData)
};

// < ..................display_function............>
function displayTable(data) {
    document.querySelector("#container").innerHTML = "";
    data.forEach(function (element) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src", element.image)

        let dis = document.createElement("p");
        dis.innerText = element.desc;
        let cost = document.createElement("h4");
        cost.innerText = "Price" + " :-$" + element.price;
        let button = document.createElement("button")
        button.innerText = "Add To Cart" + " 🛒";
        
      
        button.addEventListener("click", function () {
            let check=JSON.parse(localStorage.getItem("Cart"))|| [];
            let flag="Yes";
            check.forEach((item)=>{
                if(item.desc===element.desc){
                    flag="No"
                }
            });
            if(flag=="Yes"){
                addData("Cart", element)
            alert("item added in Cart✅");
            location.reload();
            }else{
                alert("Product already in the cart❌")
            }
           
           
        })
        let fav_btn = document.createElement("button")
        fav_btn.innerText = "Fav" + " ❤️";
        fav_btn.addEventListener("click", function () {
            
            let check=JSON.parse(localStorage.getItem("Fav"))|| [];
            let flag="Yes";
            check.forEach((item)=>{
                if(item.desc===element.desc){
                    flag="No"
                }
            });
            if(flag=="Yes"){
                addData("Fav", element);
            alert("item added in favorites✅");
            location.reload()
            }else{
                alert("Product already in the Favorite❌")
            }
        })
        div.append(img, dis, cost, button, fav_btn)
        document.querySelector("#container").append(div);

    })
}

// < ..................add to cart_/add top_function............>
function addData(key, value) {
    mData = JSON.parse(localStorage.getItem(key)) || [];
    mData.push(value);
    localStorage.setItem(key, JSON.stringify(mData));
}
/////chetan added
let fav_count=JSON.parse(localStorage.getItem("Fav"))||[];
document.querySelector("#favcount").innerText= fav_count.length



