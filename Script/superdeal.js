
let bag = [];
let url = "https://636a3f79b10125b78fd51599.mockapi.io/superdeals"
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
    document.querySelector("#super").innerHTML = "";
    data.forEach(function (element) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src", element.image)
        let title = document.createElement("P");
        title.innerText =  element.head;
       let cost = document.createElement("h4");
        cost.innerText = "Price" + " :- " + element.price;
    
        let button = document.createElement("button")
        button.innerText = "Add To Cart"
        button.addEventListener("click", function () {
            addData("add", element)
        })
        let fav_btn = document.createElement("button")
        fav_btn.innerText = "Fav"+" 🛒"
        div.append(img, title, cost,button,fav_btn)
        document.querySelector("#super").append(div);

    })
}

    function addData(key, value) {
    mData = JSON.parse(localStorage.getItem(key)) || [];
    mData.push(value);
    localStorage.setItem(key, JSON.stringify(mData));
}
