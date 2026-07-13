// 4. შექმენი 12 ფოტო (ან უბრალოდ div-ები).

// ივენთი დაამატე მხოლოდ parent-ს.

// რომელ ფოტოსაც დააჭერ:

// * დაემატოს selected კლასი.
// * წინა მონიშნულ ფოტოს კლასი მოეხსნას.

// ერთდროულად მხოლოდ ერთი ფოტო უნდა იყოს მონიშნული.


const div = document.getElementById("parent");


div.addEventListener("click", (e) => {
    e.target.style.border = "2px solid rgb(17, 70, 17)"
    if(e.target  === "IMG"){
        const curSelect = document.querySelector(".selected")
        if (curSelect) {
            curSelect.classList.remove("selected");
        }
    }

    e.target.classList.add("selected");
})

    