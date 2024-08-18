const menuBt = document.getElementById("menuBt");
const navBar = document.querySelector("header nav");

menuBt.addEventListener("click", () => {
    if (navBar.style.display === "" || navBar.style.display === "none"){
        navBar.style.display = "flex";
        menuBt.querySelector("img").src = "assets/images/icon-close.svg";
        document.body.style.overflow = "hidden";
    }
    else{
        navBar.style.display = "none";
        menuBt.querySelector("img").src = "assets/images/icon-hamburger.svg";
        document.body.style.overflow = "auto";

    }
    
});

// handel slider buttons

const roomsInfo = [
    {
        title:"Discover innovative ways to decorate",
        description: `We provide unmatched quality, comfort, and style for property owners across the country. 
Our experts combine form and function in bringing your vision to life. Create a room in your 
own style with our collection and make your property a reflection of you and what you love.`,
        image_url: "assets/images/desktop-image-hero-1.jpg"
    },
    {
        title:"We are available all across the globe",
        description: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
store locator. Any questions? Don't hesitate to contact us today.`,
        image_url: "assets/images/desktop-image-hero-2.jpg"
    },
    {
        title:"Manufactured with the best materials",
        description: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
to ensure that every product is made as perfect and as consistent as possible. With three decades of 
experience in this industry, we understand what customers want for their home and office.`,
        image_url: "assets/images/desktop-image-hero-3.jpg"
    },
]

const leftBtSlider = document.querySelector(".slider-buttons .leftBt");
const rightBtSlider = document.querySelector(".slider-buttons .rightBt");
let roomIndex = 0;

const title = document.querySelector(".description h1");
const description = document.querySelector(".description p");
const coverImg = document.querySelector(".coverImg img");
rightBtSlider.addEventListener("click", () => {
    if (roomIndex < roomsInfo.length-1){
    roomIndex++;
    title.textContent = roomsInfo[roomIndex].title;
    description.textContent = roomsInfo[roomIndex].description;
    coverImg.src = roomsInfo[roomIndex].image_url;
    console.log("roomindex "+ roomIndex);
    if (window.screen.width <= 429){
        coverImg.src = coverImg.src.replace("desktop","mobile");
    }
}
});
leftBtSlider.addEventListener("click", () => {
    if (roomIndex > 0){
    roomIndex--;
    title.textContent = roomsInfo[roomIndex].title;
    description.textContent = roomsInfo[roomIndex].description;
    coverImg.src = roomsInfo[roomIndex].image_url;
    console.log("roomindex "+ roomIndex);

    if (window.screen.width <= 429){
        coverImg.src = coverImg.src.replace("desktop","mobile");
    }
}
});















