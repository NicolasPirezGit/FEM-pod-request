let accessForm = document.getElementById("emailForm");
let accessBtn = document.getElementById("accessBtn");


//FORM VALIDATION
accessForm.addEventListener("submit", (e) => {
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    let userEmail = e.target[0].value;
    let emptyEmailMsg = document.getElementById("emptyEmailMsg");
    let badFormatMsg = document.getElementById("badFormatMsg");
    let brandsContainer = document.querySelector(".brands-container");


    if(viewportWidth > 375) {
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
    }//DESKTOP AND TABLET DESIGN
    else {
        if(userEmail === "") {
            emptyEmailMsg.style.display = "block";
            emptyEmailMsg.style.marginTop = 0;
            emptyEmailMsg.style.fontSize = "0.688rem";
            
            badFormatMsg.style.display = "none";
            accessBtn.style.marginTop = "2px";
        }
        else if(!(userEmail.includes("@")) || !(userEmail.includes(".com"))) {
            badFormatMsg.style.display = "block";
            badFormatMsg.style.marginTop = 0;
            badFormatMsg.style.fontSize = "0.688rem";

            emptyEmailMsg.style.display = "none";
            accessBtn.style.marginTop = "2px";
            
        }
        else {
            emptyEmailMsg.style.display = "none";
            badFormatMsg.style.display = "none";
            accessBtn.style.marginTop = "16px";     
        }
    }//MOBILE DESIGN
});


