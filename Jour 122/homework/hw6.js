// 6) keydown Event-ში შეამოწმე Space ღილაკი (e.code === "Space") და გამოიტანე "Jump".



document.addEventListener("keydown",  (e) => {
    if(e.code === "Space"){
        console.log("Jump")
    }
})