function showPassword(inp, icon) {
    if(inp.type == "password") {
        inp.type = "text"
        icon.classList.replace("open", "closed");
    } else {
        inp.type = "password"
        icon.classList.replace("closed", "open");
    }
}

function changeLogo(div, img) {
    if(div.classList.contains("white")) {
        div.classList.replace("white", "purple")
        img.src = "/public/img/logoPurple.png"
    } else {
        div.classList.replace("purple", "white")
        img.src = "/public/img/logoWhite.png"
    }
}

document.addEventListener("DOMContentLoaded", () => {
    var inp = document.getElementById("senha")
    var icon = document.getElementById("btn-showPass")
    var div = document.getElementById("logoDiv")
    var imgLogo = document.getElementById("logoImg")

    icon.addEventListener("click", (event) => {
        event.preventDefault();
        showPassword(inp, icon)
    })

    setInterval(() => {
        changeLogo(div, imgLogo)
    }, 2000)
})