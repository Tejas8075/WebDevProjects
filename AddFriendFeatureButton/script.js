const isStatus = document.querySelector("h5");
const btn = document.querySelector("#add");
// const remove = document.querySelector("#remove");
let flag = 0;
btn.addEventListener("click",()=>{
    if(flag==0){
        isStatus.innerHTML = "Friends";
        isStatus.style.color = "green";
        btn.innerHTML = "Remove Friend";
        flag = 1;
    }
    else{
        isStatus.innerHTML = "Stranger";
        isStatus.style.color = "red";
        btn.innerHTML = "Add Friend";
        flag = 0;
    }
})
// remove.addEventListener("click",()=>{
//     isStatus.innerHTML = "Stranger";
//     isStatus.style.color = "red";
// })