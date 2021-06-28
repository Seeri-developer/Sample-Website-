console.log("Hello World");


const list = [
    {
        id: 1,
        category: "jar",
        img: "./images/img-1.jpg",

    },
    {
        id: 2,
        category: "jar",
        img: "./images/img-2.jpg",

    },
    {
        id: 3,
        category: "design",
        img: "./images/img-3.jpg",

    },
    {
        id: 4,
        category: "design",
        img: "./images/img-4.jpg",

    },
    {
        id: 5,
        category: "design",
        img: "./images/img-5.jpg",

    },
    {
        id: 6,
        category: "jar",
        img: "./images/img-6.jpg",

    },
    {
        id: 7,
        category: "tag",
        img: "./images/img-7.jpg",

    },
    {
        id: 8,
        category: "tag",
        img: "./images/img-8.jpg",

    },
    {
        id: 9,
        category: "jar",
        img: "./images/img-9.jpg",

    },

]
const filterBtns = document.querySelectorAll(".filter-btn");
const gallery = document.querySelector(".gallery");
const galleryItem = document.querySelectorAll(".gallery-img");
const btncontainer = document.querySelector(".filter-btn-container")

window.addEventListener("DOMContentLoaded", function(){
    displayGallery(list);
})

function displayGallery(items) {
    let createItem = items.map(function (item) {
        return `<img src="./images/img-${item.id}.jpg" alt="" class="img-fluid gallery-img gallery-item">`
    })
    createItem = createItem.join("");
    // console.log(createItem);
    // gallery.appendChild(createItem)
    gallery.innerHTML=createItem;
}

//add event listener
// filterBtns.forEach(function(btn){
//     btn.classList.remove("active")
//     btn.addEventListener("click", function(e){
//         btn.classList.add("active")
//         const id=e.currentTarget.dataset.id  ;
btncontainer.addEventListener("click", function (e) {
    const id = e.target.dataset.id
    console.log(id)
    if (id !== undefined) {
        // console.log("valid")
        filterBtns.forEach(function (btn) {
            btn.classList.remove("active")
            e.target.classList.add("active");
        })
        const newItems = list.filter(function (item) {
            if (item.category == id) {
                // console.log("one")
                return item;
            }
        })
        if (id == "all") {
            displayGallery(list);
        }
        else {
            displayGallery(newItems)
        }
    }

})

