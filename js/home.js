

let massage     = document.getElementById("massage");
let index       = Number(localStorage.getItem("indexArr"));
let data        = JSON.parse(localStorage.getItem("parsonalData"));

massage.innerHTML = `Welcome ${data[index].name}`;


function logout() {
    localStorage.removeItem('sessionUsername')
}









let allImgs = document.querySelectorAll("img");
let allImgsArray = Array.from(allImgs);
let myLayer = document.querySelector(".mylayer");
let imgContent = document.querySelector(".imgContent");

let arrowRight = document.querySelector(".arrowRight");
let arrowLeft = document.querySelector(".arrowLeft");
let closeIcon = document.querySelector(".closeIcon");

let indexOfClickedImage;

for (let i=0; i < allImgs.length; i++) {
    allImgs[i].addEventListener("click", function (e) {
        myLayer.classList.remove("d-none");
        let clickedImage = e.target; // ==> <img src="image/work-4.jpg" class="w-100" alt="Image 4">
        let srcOfClickedImage = e.target.getAttribute("src"); // ==> image/work-5.jpg
        imgContent.style.backgroundImage = `url(${srcOfClickedImage})`;

        indexOfClickedImage = allImgsArray.indexOf(clickedImage);
    });
}

function getNextElement() {
    // console.log("Next Element");
    indexOfClickedImage++;
    if (indexOfClickedImage == allImgs.length) {
        indexOfClickedImage = 0;
    }
    let srcOfNextElement = allImgs[indexOfClickedImage].getAttribute("src");
    imgContent.style.backgroundImage = `url(${srcOfNextElement})`;

};
arrowRight.addEventListener("click", getNextElement);

function getPrevElement() {
    indexOfClickedImage--
    if (indexOfClickedImage == -1) {
        indexOfClickedImage = allImgs.length - 1;
    }
    let srcOfNextElement = allImgs[indexOfClickedImage].getAttribute("src");
    imgContent.style.backgroundImage = `url(${srcOfNextElement})`;
};
arrowLeft.addEventListener("click", getPrevElement);

function closeLayer() {
    myLayer.classList.add("d-none");
};

closeIcon.addEventListener("click", closeLayer);


document.addEventListener("keyup", function (e) {
    if (!myLayer.classList.contains("d-none")) {
        if (e.code == "Escape") {
            closeLayer();
        } else if (e.code == "ArrowLeft") {
            getPrevElement();
        } else if (e.code == "ArrowRight") {
            getNextElement();
        }
    }
});

myLayer.addEventListener("click", function (e) {
    // console.log(e.target);

    if (e.target == myLayer) {
        closeLayer();
    }
});