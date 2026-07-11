// 5) keydown Event-ში შეამოწმე:
// თუ დააჭირეს Enter-ს, კონსოლში გამოიტანე "Enter Pressed".


document.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        console.log("Enter pressed")
    }
})

