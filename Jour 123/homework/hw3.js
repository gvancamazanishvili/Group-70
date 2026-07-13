// 3. დაამატე ღილაკი “Add Item”.

// ყოველ დაჭერაზე სიაში ახალი li დაემატოს.

// ახალ ელემენტებზეც Event Delegation-მა ავტომატურად უნდა იმუშაოს.

const ul = document.getElementById("ul");


ul.addEventListener("click",  (e) => {
    console.log(e.target.textContent);
})



const addBtn = document.getElementById("add");


addBtn.addEventListener("click", () => {
    const currItem = ul.children.length;

    const newLi = document.createElement("li");

    newLi.textContent = `Item ${currItem + 1}`


    ul.appendChild(newLi);
})