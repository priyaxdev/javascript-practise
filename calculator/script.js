console.log("hello js");
let cells=document.querySelectorAll(".cell");
const eqlbtn = document.getElementById("equal");
const clrBtn = document.getElementById("clear");
const display = document.getElementById("display");
const ReSultheading = document.querySelector("h1");
const remove=document.querySelector("#x");

cells.forEach(cell =>{
    cell.addEventListener("click",() =>{
        const value=cell.getAttribute("data-value");

        if(!value) return;
        display.value+=value;
    })
})
eqlbtn.addEventListener("click",() => {
    console.log(eval(display.value));
    display.value=eval(display.value);
})
clrBtn.addEventListener("click",() =>{
    display.value="";
})
remove.addEventListener("click",() => {
    display.value=display.value.slice(0,-1);
})