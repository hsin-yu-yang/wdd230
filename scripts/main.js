let lastModified = document.querySelector(".lastmodified")
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
}
lastModified.textContent = ` Last Modified: ${new Date(document.lastModified).toLocaleDateString("en-US", lastModifiedOptions)}`;
currentYear.textContent = `${new Date().toLocaleDateString("en-US", currentYearOptions)}`

/* HAMBURGER BUTTON */
function toggleMenu() {
    let nav=document.getElementById("primaryNav")
    let hamburgerBtn=document.getElementById("hamburgerBtn")
    console.log(nav)
    if (nav.style.display=== "block"){
        nav.style.display="none";
        hamburgerBtn.src="chamber/images/hamburger.png"  
    } else{
        nav.style.display= "block";
        hamburgerBtn.src="chamber/images/x.png"
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

    let rating=document.getElementById("rating")
    rating.addEventListener("change",()=>{
        let output=document.getElementById("rating")
        output.innerHTML=rating.value
    })