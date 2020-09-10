window.onload = () => {

    bgColor = localStorage.getItem("bgColor");
    textColor = localStorage.getItem("textColor");
    textSize = localStorage.getItem("textSize");
    fontFamily = localStorage.getItem("fontFamily");
    lineHeight = localStorage.getItem("lineHeight");

function addCss() {
    bgColor = localStorage.setItem("bgColor", "white");
    bgColor = localStorage.setItem("texColor", "blue");
    bgColor = localStorage.setItem("textSize", "20px");
}
}