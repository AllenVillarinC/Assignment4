window.onload = function () {
  var textMore = "Read the whole article";
  var textLess = "[Hide]";
  var whatToHide = document.getElementById("show-hide");
  var moreLess = document.getElementById("more-less");
  whatToHide.className = "hidden";
  moreLess.innerHTML = textMore;
  //moreLess.onclick = function() {
  moreLess.addEventListener("click", () => {
    if (moreLess.innerHTML == textMore) {
      moreLess.innerHTML = textLess;
      whatToHide.className = "visible";
    } else {
      moreLess.innerHTML = textMore;
      whatToHide.className = "hidden";
    }
  });

  var image = document.getElementById("flowChart");
  image.onmouseover = function () {
    image.addEventListener("mousemove", (event1) => {
      image.src = "./images/TheMammothInternet-hover.jpeg";
    });
  };
  image.onmouseout = function () {
    image.src = "./images/TheMammothInternet.jpeg";
  };

  var h1 = document.getElementById("heading1");
  h1.onclick = function () {
    if (h1.style.position === "static") {
      h1.style.position = "fixed";
    } else h1.style.position = "static"; // setting it to static
  };

  var absractDiv = document.getElementById("absractDiv");
  absractDiv.addEventListener("click", function () {
    changePadding(absractDiv);
  });

  var introDiv = document.getElementById("introDiv");
  introDiv.addEventListener("click", function () {
    changePadding(introDiv);
  });

  var controDiv = document.getElementById("controDiv");
  controDiv.addEventListener("click", function () {
    changePadding(controDiv);
  });

  var resultDiv = document.getElementById("resultDiv");
  resultDiv.addEventListener("click", function () {
    changePadding(resultDiv);
  });

  function changePadding(divElm) {
    let bottom = "0px 0px 1px";
    let bottomColor = "#e61e1e";
    let top = "1px 0px 0px";
    let topColor = "#1ee62f";

    if (divElm === absractDiv || divElm === controDiv) {
      divElm.style.padding = bottom;
      divElm.style.backgroundColor = bottomColor;
    } else if (divElm === introDiv || divElm === resultDiv) {
      divElm.style.padding = top;
      divElm.style.backgroundColor = topColor;
    }

    divElm.addEventListener("click", (changeEvent) => {
      if (
        (divElm.style.padding === bottom) &
        (divElm.style.backgroundColor === "rgb(230, 30, 30)") // rgb properties of #e61e1e
      ) {
        divElm.style.padding = top;
        divElm.style.backgroundColor = topColor;
      } else if (
        (divElm.style.padding === top) &
        (divElm.style.backgroundColor === "rgb(30, 230, 47)") // rgb properties of #1ee62f
      ) {
        divElm.style.padding = bottom;
        divElm.style.backgroundColor = bottomColor;
      }
    });
    // implement this function
  }

  var table = document.getElementById("tableId");
  table.addEventListener("mouseover", (changeColor1) => {
    table.style.backgroundColor = "#0000ff";
  });
  table.addEventListener("mouseout", (changeColor2) => {
    table.style.backgroundColor = "#1ee62f";
  });
  // complete the code so that the table label change it colour when mouseover "#0000ff"
  // and mouseout "#1ee62f"
};
