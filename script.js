const container = document.getElementsByClassName("container")[0];
const range = document.querySelector("#range");


// range.addEventListener("change",()=>{
//     container.style.filter = "brightness(" + range.value + "%)";
// })

range.addEventListener("change",()=>{
    container.style.filter = "brightness("+ range.value + "%)";
})