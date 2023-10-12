let visit = document.getElementById("visit")
if (!localStorage.getItem("visit")){
    localStorage.setItem("visit",1)
} 
else{
    let number=parseInt(localStorage.getItem("visit"))
    number+=1
    localStorage.setItem("visit",number)
}
visit.innerHTML = localStorage.getItem("visit")