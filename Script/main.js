
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let arr = ["Images/1.jpg", "Images/2.jpg", "Images/3.jpg", "Images/4.jpg","Images/5.jpg", "Images/6.jpg"]
let i = 0;
next.addEventListener("click", function () {
    i++;
    if (i > arr.length - 1) {
        i = 0;
    }
    document.getElementById("image").src = arr[i];
})
prev.addEventListener("click", function (){
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
setInterval(slides, 2000);



    let bag = [];
    let url = "https://636a3f79b10125b78fd51599.mockapi.io/products"
    fetch(url).then((res) => res.json())
        .then((data) => {
            bag = data;
            console.log(data)
            displayTable(data)
        });

        function justSort() {
        let sorted = document.querySelector("select").value;
        if (sorted == "low to high") {
            bag.sort((a, b) => a.price - b.price);
        }
        if (sorted == "high to low") {
            bag.sort((a, b) => b.price - a.price);}
            displayTable(bag); };
        function search() {
        let p = document.querySelector("input").value
        let newData = bag.filter(function (ele) {
            return ele.desc.toLowerCase().includes(p.toLocaleLowerCase());
           });
        displayTable(newData)
 };
        function displayTable(data) {
        document.querySelector("#container").innerHTML = "";
        data.forEach(function (element) {
            let div = document.createElement("div");
            let img = document.createElement("img");
            img.setAttribute("src", element.image)
            // let title = document.createElement("h3");
            // title.innerText = "PrevPice" + " :- " + element.prevPrice;
            let dis = document.createElement("p");
            dis.innerText = element.desc;
            let cost = document.createElement("h4");
            cost.innerText = "Price" + " :-$"+ element.price;
            // let rat = document.createElement("h4");
            // rat.innerText = "Rating" + "  " + element.rating.rate
            let button = document.createElement("button")
            button.innerText = "Add To Cart"+" 🛒"
            button.addEventListener("click", function () {
                addData("add", element)
})
            div.append(img,dis, cost,button)
            document.querySelector("#container").append(div);

        })
    }
        function addData(key, value) {
        mData = JSON.parse(localStorage.getItem(key)) || [];
        mData.push(value);
        localStorage.setItem(key, JSON.stringify(mData));
}




