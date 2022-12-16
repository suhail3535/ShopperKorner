// Slider code(Crausal code)
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let arr = ["Images/1.jpg", "Images/2.jpg", "Images/3.jpg", "Images/4.jpg", "Images/5.jpg", "Images/6.jpg","Images/7.jpg"]
let i = 0;
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
function slides() {

    document.getElementById("image").src = arr[i];
    if (i < arr.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
}
setInterval(slides, 1500);

// landing page fetch API CODE

let bag = [];
let url = "https://636a3f79b10125b78fd51599.mockapi.io/products"
fetch(url).then((res) => res.json())
    .then((data) => {
        bag = data;
        console.log(bag)
        displayTable(bag)
    });

// <......sort by price function...........>
    function justSort() {
    let sorted = document.querySelector("select").value;
    if (sorted == "low to high") {
        bag.sort((a, b) => a.price - b.price);
    }
    if (sorted == "high to low") {
        bag.sort((a, b) => b.price - a.price);
    }
    displayTable(bag);
};
    // <......search function...........>

   function search() {
    let p = document.querySelector("input").value;
    console.log(p)
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
            addData("Cart", element)
            alert("item added in Cart")
        })
        let fav_btn = document.createElement("button")
        fav_btn.innerText = "Fav" + " ❤️";
        fav_btn.addEventListener("click", function () {
            addData("Fav", element)
            alert("item added in favorites")
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




