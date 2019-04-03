

function doLowercase() {
    alert("doLowercase");

}

function initButton(id, clickEvent) {
    const buttonElem = document.getElementById(id);
    buttonElem.addEventListener("click", clickEvent, false);
}

initButton("lowercaseButton", doLowercase);