const side = document.querySelector(".side");
const openBtn = document.querySelector(".openbtn");
const closeBtn = document.querySelector(".closebtn");

openBtn.addEventListener("click", function(){
    side.classList.add("showside");
})

closeBtn.addEventListener("click", function(){
    side.classList.remove("showside");
})
