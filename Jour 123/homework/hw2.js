// 2. შექმენი ul, რომლის შიგნით იქნება 8 li.
// Event Listener დაამატე მხოლოდ ul-ს.
// რომელ li-საც დააჭერ:
// You clicked: Item 5

// უნდა დაიბეჭდოს კონსოლში.


const ul = document.getElementById("ul");


ul.addEventListener("click",  (e) => {
    console.log(e.target.textContent);
})