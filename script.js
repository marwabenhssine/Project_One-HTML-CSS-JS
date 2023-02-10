
let mainColors = localStorage.getItem("color_option");

//10 check if local's Storage color is not empty
if (mainColors !== null) {

    // console.log('Local Storage Is Not empty you can set it on Root now')
    // console.log(localStorage.getItem("color_option")); //fetch the color from local Storage

    //localStorage.getItem("color_option")
      
    //12 put the item color in the css from the local Storage's item
    document.documentElement.style.setProperty("--main-color", localStorage.getItem("color_option"))

}

//Sticky Header

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0)
});


// Toggle Menu
let menuIcon = document.getElementById("menu-icon")
 let navList  =document.querySelector(".navlist")   
menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("x");
    navList.classList.toggle("open")
    
})

window.onscroll = () => {
    menuIcon.classList.remove("x");
    navList.classList.remove('open')
}

//Scroll Reveal
// const sr = ScrollReveal({
//     distance: '30px',
//     duration: 2600,
//     reset: true
// })
// sr.reveal('.home-text', { delay: 280, origin: 'bottom' })
// sr.reveal('.featured,.cta,.new,.brand,.contact,main', {delay:300, origin: 'bottom'})



//Create Slider Show
let home = document.querySelector(".home");
let imgsArray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"]

function setRandomize() {
    setInterval(() => { 
        const randomImg = Math.floor(Math.random() * imgsArray.length);
        home.style.backgroundImage =
          'url("imgs/' + imgsArray[randomImg] + '  ")';


    }, 1000);
    
}
  setRandomize();



//Create Carousel OWL

let span = document.getElementsByClassName("carousel-span");
let divs = document.querySelectorAll(".carousel .card");

let l = 0;
span[1].onclick = () => {
    l++;
    for (let i of divs) {
           console.log(l);
           console.log(i);
        console.log(divs);
        
        if (l == 0) { i.style.left = "0px" }
        if (l == 1) { i.style.left = "-740px" }
        if (l == 2) { i.style.left = "-1090px" }
        // if (l == 3) { i.style.left = "-1700px" }
        if (l > 2)
        { l = 2 }
        
    }
}

span[0].onclick = () => {
  l--;
  for (let i of divs) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-740px";
    }
    if (l == 2) {
      i.style.left = "-1480px";
    }
    if (l == 3) {
      i.style.left = "-2220px";
    }
    if (l == 4) {
      i.style.left = "-2960px";
    }
    if (l < 0) {
      l = 0;
    }
  }
};


//POP UP: Featured Categories
let featured = document.querySelectorAll(".featured img");


featured.forEach((img) => {
  img.addEventListener("click", (e) => {
    //console.log(img)

    //Create Overlay Element
    let overlay = document.createElement("div");

    //Add Class to overlay
    overlay.className = "popup-overlay";

    //Append Overlay to tge body
    document.body.appendChild(overlay);

    //Create The popBox
    let popupBox = document.createElement("div");

    //Add Class to popupBox
    popupBox.className = "popup-box";

    //Add the title to the Imahe

    if (img.alt != null) {
      //Create Heading
      let imgHeading = document.createElement("h3");

      //Create Text for heading
      let imgText = document.createTextNode(img.alt);

      //Append the Heading to the popup-box
      imgHeading.append(imgText);
    
        //Append the heading to The popup Box
        popupBox.appendChild(imgHeading)
    }

    //create The Image
    let popupImage = document.createElement("img");

    //set Image Source
    popupImage.src = img.src;

    //Add Image to popup Box
    popupBox.appendChild(popupImage);

    //Append the popup Box to Body
    document.body.appendChild(popupBox);
  
   //Create the close span
      let closeBtn = document.createElement("span")

    //Create the close btn text
      let closeBtnText = document.createTextNode("X");

      //Append Text to close btn
      closeBtn.appendChild(closeBtnText)

    //Add Class To Close btn
      closeBtn.className = "close-button";
    
      //Add Close Btn to the popup box
      popupBox.appendChild(closeBtn)
  
  });
});


//Close popup
document.addEventListener("click", (e) => {
    if (e.target.className === "close-button") {
        e.target.parentNode.remove();
    document.querySelector(".popup-overlay").remove();

    }
}) 
    
//settings colors
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
    
    //Toggle Class fa-spin Itself
    this.classList.toggle("fa-spin")
    
    //Toggle Class Open Main Settings
    document.querySelector(".settings-box").classList.toggle("open")  
}

//Switch Colors
const listLi = document.querySelectorAll(".colors-list li")

//loop on all list items
listLi.forEach((li) => {

    //click on every li item
    li.addEventListener("click", (e) => {
      //set Color on Root
      document.documentElement.style.setProperty(
        "--main-color",
        e.target.dataset.color
      );

      //Set Color in Local Storage
      localStorage.setItem("color_option", e.target.dataset.color);

    //   13 Remove Active Class From All children

        e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active")// we do not add the(point in the active cauz we put the classList keyword

        });
        // 14 Add Active Class On Self
        e.target.classList.add("active");    })
    })


  

