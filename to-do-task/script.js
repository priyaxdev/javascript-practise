console.log("hello js");
let ar=[];
let addtask=document.querySelector("#addtask");
let input=document.querySelector("#inptsk");
let clr=document.querySelector("#clrtask");
let review=document.querySelector("#rvwtask")
let container = document.getElementById("container");
let isPrinted=false;
// const printar = () =>{
//     ar.forEach((item) => {
//         console.log(item);
//         let p = document.createElement("p");
//         p.innerText = item;
//         container.appendChild(p);
//     });
// }
const printWithCheckbox = () => {
    container.innerHTML = ""; // clear container first

    ar.forEach((item, index) => {
        // create a div to wrap checkbox + task
        let div = document.createElement("div");

        // create checkbox
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "task_" + index;

        // create label to show task text
        let label = document.createElement("label");
        label.innerText = item;
        label.style.marginLeft = "8px"; // small space between checkbox & text

        // append checkbox and label to div
        div.appendChild(checkbox);
        div.appendChild(label);

        // append div to container
        container.appendChild(div);

        // add event listener for checkbox
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                // strike through the text
                label.style.textDecoration = "line-through";

                // remove task from array
                const taskIndex = ar.indexOf(item);
                if (taskIndex > -1) {
                    ar.splice(taskIndex, 1);
                    console.log("Updated array:", ar);
                }

                // optional: remove the element from UI after a short delay
                setTimeout(() => {
                    container.removeChild(div);
                }, 300); // 0.3s delay to show strike effect
            }
        });
    });
};

review.addEventListener("click", () => {
    container.innerHTML = ""; // always clear first

    if(!isPrinted){
        if(ar.length === 0){
            let p = document.createElement("p");
            p.innerText = "NO TASKS PRESENT";
            p.style.fontStyle = "italic";
            p.style.color = "#888";
            container.appendChild(p);
        } else {
            printWithCheckbox();
        }
    }

    isPrinted = !isPrinted; // toggle
});

const addtask1 = ()=>{
    isPrinted=false;
    container.innerHTML="";
    const value=input.value.trim();
    if(value==="") return;

    ar.push(value);
    input.value="";
    console.log(ar);
}
addtask.addEventListener("click", addtask1);
input.addEventListener("keydown",(e) =>{
    if(e.key==="Enter"){
        addtask1();
    }
})
clr.addEventListener("click", () => {
    isPrinted=false;
    container.innerHTML="";
    ar.length=0;
    console.log(ar);

})

