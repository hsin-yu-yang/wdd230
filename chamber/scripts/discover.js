/* DISCOVER - LAZY LOAD */
const imagesToLoad = document.querySelectorAll(".image-gallery img[data-src]");

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
image.setAttribute("src", image.getAttribute("data-src"));
image.onload = () => {image.removeAttribute("data-src");};
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
        if (item.isIntersecting) {
            loadImages(item.target);
            observer.unobserve(item.target);
        }
        });
    }, imgOptions);

    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} 
else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
};

/* DISCOVER - LAST VISIT */
let lastVisit = localStorage.getItem("lastVisit");
const lastVisitElement = document.querySelector("#lastVisit p");

    if (lastVisit) {
        let currentDate = new Date();
        let previousDate = new Date(lastVisit);
        let timeDifference = currentDate.getTime() - previousDate.getTime();
    
        let differenceInDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    if (differenceInDays>1){
        lastVisitElement.innerText = `You visited this webpage ${differenceInDays} days ago!`;
    }
    else{
        lastVisitElement.innerText = `Back so soon! Awesome!`;
    }   
    }
    else {
        lastVisitElement.innerText = `Welcome! Let us know if you have any questions.`
    }
    localStorage.setItem("lastVisit", new Date());