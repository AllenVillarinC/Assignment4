window.onload = function () {
  var button = document.getElementById("add_button");
  var stickyPad = document.getElementById("stickies");
  button.addEventListener("click", (addEvent) => {
    stickyPad.innerHTML = "";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:2909/partB_json/data.json"); // Changed liveServer.settings.port from 5500(default) to 2909.
    //xhr.open("GET", "partB_json/data.json"); // Local file location
    xhr.onload = function () {
      var storedData = JSON.parse(xhr.responseText);
      processData(storedData);
    };
    xhr.send();
  });
  var deleteButton = document.getElementById("del_button");
  deleteButton.addEventListener("click", (deleteEvent) => {
    stickyPad.innerHTML = "";
  });
}; //test
function processData(object) {
  var copyObject = object;
  for (const key in copyObject) {
    var generatedText = "";
    var objectTitle = copyObject[key].title;
    var objectYear = copyObject[key].year;
    var objectColor = copyObject[key].color;
    generatedText +=
      key + " (" + objectYear + ")<br> " + objectTitle + ".<br> <br>"; // added "object" for readability
    // key + " (" + year + ")<br> " + title + ".<br> <br>"; // Sticky note format
    var token = {
      objectValue: generatedText,
      stickyColor: objectColor,
    };
    addStickyToPage(token);
  }
}
function addStickyToPage(stickyObject) {
  var stickies = document.getElementById("stickies");
  var sticky = document.createElement("li");
  sticky.style.backgroundColor = stickyObject.stickyColor;
  var span = document.createElement("span");
  span.classList.add("sticky");
  span.innerHTML = stickyObject.objectValue;
  sticky.appendChild(span);
  stickies.appendChild(sticky);
}

// added this line to add changes to the main branch
