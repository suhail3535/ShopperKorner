
let bag = [];
let url = "https://fakestoreapi.com/products";
fetch(url).then((res) => res.json())
    .then((data) => {
        bag = data;
        // console.log(data)
        displayTable(data)
    });

  
        
// <....search function......>
    function search() {
    let z = document.querySelector("input").value
    let newData = bag.filter(function (ele) {
        return ele.head.toLowerCase().includes(z.toLocaleLowerCase());
       });
    displayTable(newData)
};
// <...display main function......>

    function displayTable(data) {
    document.querySelector("#super").innerHTML = "";
    data.forEach(function (element) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src", element.image)
        let title = document.createElement("P");
        title.innerText = element.title;
       let cost = document.createElement("h4");
        cost.innerText = "Price" + " :- " + element.price;
    
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
        
        div.append(img, title, cost,button,fav_btn)
        document.querySelector("#super").append(div);

    })
}
// .<...add to cart and fav...>
    function addData(key, value) {
    mData = JSON.parse(localStorage.getItem(key)) || [];
    mData.push(value);
    localStorage.setItem(key, JSON.stringify(mData));
}
// ****sort_function***

function sort(){
    let sorted = document.querySelector("select").value
    if (sorted === "select") {
       
        displayTable(bag)
        location.reload();
    } else {
        if(sorted=="LTH") {
            bag.sort((a, b) => a.price-b.price);
        } if (sorted =="HTL") {
         bag.sort((a, b) => b.price-a.price);
        } 
        displayTable(bag);
        // console.log(bag)
    }

}

   
// let f = document.getElementById("filter")
//     f.addEventListener("change", function () {
//     let filer_new_data = bag.filter(function (ele) {
//         return ele.head === f.value;
//     })
//         console.log(filer_new_data);
//         displayTable(filer_new_data);

// })

// /blogs?filter=blog1 - search by all fields for string blog1

let filterBtn = document.getElementById("filter")
filterBtn.addEventListener("change", function () {
    let fvalue = filterBtn.value
    console.log(fvalue)
    async function fetchedFilterData(fvalue) {
    try {
    let data = await fetch(`https://636a3f79b10125b78fd51599.mockapi.io/superdeals?filter=${fvalue}`)
            if (data.ok) {
         let newData = await data.json();
                if (fvalue == "select") {
                   displayTable(bag)
                }
                displayTable(newData)
            } else {
                console.log("something went wrong")
}
} catch (error) {
    console.log(error)
}

}
fetchedFilterData(fvalue)


}) 
  