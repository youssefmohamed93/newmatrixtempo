let darkmode = document.querySelector("#darkmode");
let bodyEl = document.querySelector("#section");
let DARKMODE = false;
darkmode.addEventListener('change' , (event) => {
    DARKMODE = event.target.checked;
    if (DARKMODE) {
        bodyEl.classList.add("dark");
    }
    else {
        bodyEl.classList.remove("dark")
    }
});