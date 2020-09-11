window.onload = function () {
  bgColor = localStorage.bgColor;
  textColor = localStorage.textColor;
  textSize = localStorage.textSize;
  fontFamily = localStorage.fontFamily;
  lineHeight = localStorage.lineHeight;

  if (
    bgColor != null &&
    textColor != null &&
    textSize != null &&
    fontFamily != null &&
    lineHeight != null
  ) {
    applyStyle();
  }

  function applyStyle() {
    let body = document.querySelector("body");
    let p = document.getElementsByTagName("p");
    body.style.backgroundColor = bgColor;
    for (let index = 0; index < p.length; index += 1){
      p[index].style.color = textColor;
      p[index].style.textSize = textSize;
      p[index].style.fontFamily = fontFamily;
      p[index].style.lineHeight = lineHeight;
    }

  }

  function addCss() {
    localStorage.bgColor = "white";
    localStorage.textColor = "blue";
    localStorage.textSize = "20px";
    localStorage.fontFamily = "monospace";
    localStorage.lineHeight = "40px";
  }

  const btnAddStyle = document.querySelector("#btnAddStyle");
  btnAddStyle.addEventListener("click", addCss);

  const btnRemoveStyle = document.querySelector("#btnRemoveStyle");
  btnRemoveStyle.addEventListener("click", () => localStorage.clear());
};
