let accessForm = document.getElementById("emailForm");
let accessBtn = document.getElementById("accessBtn");

accessForm.addEventListener("submit", (e) => {
    let userEmail = e.target[0].value;
    let emptyEmailMsg = document.getElementById("emptyEmailMsg");
    let badFormatMsg = document.getElementById("badFormatMsg");
    let brandsContainer = document.querySelector(".brands-container");


    if(userEmail === "") {
        emptyEmailMsg.style.display = "block";
        badFormatMsg.style.display = "none";
        brandsContainer.style.marginTop = "46.4px";
    }
    else if(!(userEmail.includes("@")) || !(userEmail.includes(".com"))) {
        badFormatMsg.style.display = "block";
        emptyEmailMsg.style.display = "none";
        brandsContainer.style.marginTop = "46.4px";
    }
    else {
        emptyEmailMsg.style.display = "none";
        badFormatMsg.style.display = "none";
        brandsContainer.style.marginTop = "68.6px";
    }
});