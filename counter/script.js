console.log("hello js");
let ct=document.querySelector(".count");
let reset=document.querySelector("#reset");
let add=document.querySelector("#add");
let sub=document.querySelector("#sub");
let count=0;
function updatecolor(){
    if(count>0){
        ct.style.backgroundColor="#22c55e";
    }else if(count<0){
        ct.style.backgroundColor="#ef4444";
    }else{
        ct.style.backgroundColor="aquamarine";
}
}
add.addEventListener("click", () => {
    count++;
    ct.innerText=count;
    updatecolor();
})
sub.addEventListener("click",()=>{
    count--;
    ct.innerText=count;
    updatecolor();
})
reset.addEventListener("click",()=>{
    count=0;
    ct.innerText=count;
    updatecolor();
})
