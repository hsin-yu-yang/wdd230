const baseURL = "https://hsin-yu-yang.github.io/wdd230/";
const linksURL = "https://raw.githubusercontent.com/hsin-yu-yang/wdd230/master/data/links.json";
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }
  
  getLinks();

function displayLinks(weeks) {
    const links=document.getElementById("links");
    console.log(weeks);
    let i=1
    weeks.weeks.forEach(week => {
        console.log(week)
        let li=document.createElement("li")
        let a=document.createElement("a")
        let a2=document.createElement("a")
        li.innerHTML=`Lessson 0${i} : `
        i++
        console.log(week.links)
        a.href=week.links[0].url
        a.textContent=week.links[0].title
        a2.href=week.links[1].url
        a2.textContent=week.links[1].title
        li.appendChild(a)
        li.innerHTML+=` | `
        li.appendChild(a2)
        links.appendChild(li)
    });
}

    // <li>Lesson 01: <a href="https://codepen.io/Ella-Yang/pen/ZEVXQbN" target="_blank">JavaScript Code Pen</a> / <a href="week01/chamber-site-plan.html" target="_blank">Chamber - Site Plan</a></li>
    // <li>Lesson 02: <a href="chamber/index.html" target="_blank">The Chamber of Commerce Home Page</a></li>
    // <li>Lesson 03: <a href="week03/lazyload.html" target="_blank">Responsive Images</a>/ <a href="chamber/discover.html" target="_blank">The Chamber Discover Page</a></li>
    // <li>Lesson 04: <a href="chamber/join.html" target="_blank">The Chamb Join Page</a></li>
    // <li>Lesson 05: <a href="chamber/directory.html" target="_blank">The Chamber Directory Page</a></li>
