
let bag = [];
let url = "https://636a3f79b10125b78fd51599.mockapi.io/newarrival"
fetch(url).then((res) => res.json())
    .then((data) => {
        bag = data;
        console.log(data)
        displayTable(data)
    });

  
    function search() {
        let x = document.querySelector("input").value
        console.log(x)
    let newData = bag.filter(function (ele) {
        return ele.name.toLowerCase().includes(x.toLocaleLowerCase());
       });
    displayTable(newData)
};
    function displayTable(data) {
    document.querySelector("#newArrival").innerHTML = "";
    data.forEach(function (element) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src", element.Image)
        let title = document.createElement("p");
        title.innerText =  element.name;
       let cost = document.createElement("h4");
        cost.innerText = "Price" + " :- " + element.price;
    
        let button = document.createElement("button")
        button.innerText = "Add To Cart"
        button.addEventListener("click", function () {
            addData("add", element)
        })
        let fav_btn = document.createElement("button")
        fav_btn.innerText = "Fav"+" 🛒"
        div.append(img, title, cost, button, fav_btn);
        document.querySelector("#newArrival").append(div);

    })
}

    function addData(key, value) {
    mData = JSON.parse(localStorage.getItem(key)) || [];
    mData.push(value);
    localStorage.setItem(key, JSON.stringify(mData));
}
