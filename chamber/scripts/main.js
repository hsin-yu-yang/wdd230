/* HAMBURGER BUTTON */
function toggleMenu() {
let nav=document.getElementById("primaryNav")
let hamburgerBtn=document.getElementById("hamburgerBtn")
console.log(nav)
if (nav.style.display=== "block"){
    nav.style.display="none";
    hamburgerBtn.src="./images/hamburger.png"  
} else{
    nav.style.display= "block";
    hamburgerBtn.src="./images/x.png"
}
};

const x = document.getElementById("hamburgerBtn")
x.addEventListener("click",toggleMenu);

function toggledarkmode(){
    var body = document.body
    body.classList.toggle("dark_mode")
    var header = document.header
    header.classList.toggle("dark_mode")
}
const buttton = document.getElementById("dark_mode")
buttton.addEventListener("click",toggledarkmode);

/* TODAY'S DATE IN HEADER */
const todayDateField = document.querySelector("#todaysDate");
const date = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);
todayDateField.innerHTML = fulldate;

/* JOIN US BANNER */
/* Display banner if day is Monday or Wednesday, it's forcing to hide it instead */
const meetingBanner = document.querySelector("#home-meeting-banner")
if (meetingBanner != null) {
    if (date.getDay() === 1 || date.getDay() === 2) {
        meetingBanner.style.display = "block";
    }
    else {
        meetingBanner.style.display = "none";
    }
};
/* FOOTER COPYRIGHT YEAR AND LAST MODIFIED */
let lastModified = document.querySelector(".lastmodified")
let lastModified2 = document.querySelector(".lastmodified2")
let currentYear = document.querySelector("#currentyear")

const lastModifiedOptions = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
};
const currentYearOptions = {
    year: "numeric",
};
lastModified.textContent = ` Last Modified: ${new Date(document.lastModified).toLocaleDateString("en-US", lastModifiedOptions)}`;
lastModified2.textContent = ` Last Modified: ${new Date(document.lastModified).toLocaleDateString("en-US", lastModifiedOptions)}`;
currentYear.textContent = `${new Date().toLocaleDateString("en-US", currentYearOptions)}`