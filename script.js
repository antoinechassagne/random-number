function generateNumber() {
  var number = Math.floor(Math.random() * 100 + 1);
  return number;
}

var generateButton = document.getElementById("generate-button");

var active = false;

generateButton.addEventListener("click", function() {
  if (active === true) {
    return;
  }
  active = true;
  var loaderTest = document.getElementById("loader");
  var emojiReaction = document.getElementById("emoji");
  if (loaderTest === null) {
    emojiReaction.innerHTML = "";
    addLoader();
    setTimeout(function() {
      generateNumber();
      var result = generateNumber();
      var getP = document.getElementById("generated-number");
      getP.innerHTML = "";
      getP.appendChild(document.createTextNode(result));
      if (result <= 10) {
        emojiReaction.innerHTML = "";
        emojiReaction.appendChild(document.createTextNode("😭"));
      } else if (result <= 25) {
        emojiReaction.innerHTML = "";
        emojiReaction.appendChild(document.createTextNode("😢"));
      } else if (result <= 50) {
        emojiReaction.innerHTML = "";
        emojiReaction.appendChild(document.createTextNode("🙁"));
      } else if (result <= 75) {
        emojiReaction.innerHTML = "";
        emojiReaction.appendChild(document.createTextNode("😕"));
      } else if (result <= 90) {
        emojiReaction.innerHTML = "";
        emojiReaction.appendChild(document.createTextNode("🙂"));
      } else if (result <= 99) {
        emojiReaction.innerHTML = "";
        emojiReaction.appendChild(document.createTextNode("😁"));
      } else if (result === 100) {
        emojiReaction.innerHTML = "";
        emojiReaction.appendChild(document.createTextNode("🤩"));
      }
      active = false;
    }, 2000);
    return;
  }
  generateNumber();
  var result = generateNumber();
  var getP = document.getElementById("generated-number");
  getP.innerHTML = "";
  getP.appendChild(document.createTextNode(result));
  if (result <= 10) {
    emojiReaction.innerHTML = "";
    emojiReaction.appendChild(document.createTextNode("😭"));
  } else if (result <= 25) {
    emojiReaction.innerHTML = "";
    emojiReaction.appendChild(document.createTextNode("😢"));
  } else if (result <= 50) {
    emojiReaction.innerHTML = "";
    emojiReaction.appendChild(document.createTextNode("🙁"));
  } else if (result <= 75) {
    emojiReaction.innerHTML = "";
    emojiReaction.appendChild(document.createTextNode("😕"));
  } else if (result <= 90) {
    emojiReaction.innerHTML = "";
    emojiReaction.appendChild(document.createTextNode("🙂"));
  } else if (result <= 99) {
    emojiReaction.innerHTML = "";
    emojiReaction.appendChild(document.createTextNode("😁"));
  } else if (result === 100) {
    emojiReaction.innerHTML = "";
    emojiReaction.appendChild(document.createTextNode("🤩"));
  }
  active = false;
});

window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
  if (active === true) {
    return;
  }
  active = true;
  var loaderTest = document.getElementById("loader");
  var emojiReaction = document.getElementById("emoji");
  if (loaderTest === null) {
    emojiReaction.innerHTML = "";
    addLoader();
    setTimeout(function() {
      generateNumber();
      var result = generateNumber();
      var getP = document.getElementById("generated-number");
      getP.innerHTML = "";
      getP.appendChild(document.createTextNode(result));
      if (result <= 10) {
        emojiReaction.innerHTML = "";
        emojiReaction.appendChild(document.createTextNode("😭"));
      } else if (result <= 25) {
        emojiReaction.innerHTML = "";
        emojiReaction.appendChild(document.createTextNode("😢"));
      } else if (result <= 50) {
        emojiReaction.innerHTML = "";
        emojiReaction.appendChild(document.createTextNode("🙁"));
      } else if (result <= 75) {
        emojiReaction.innerHTML = "";
        emojiReaction.appendChild(document.createTextNode("😕"));
      } else if (result <= 90) {
        emojiReaction.innerHTML = "";
        emojiReaction.appendChild(document.createTextNode("🙂"));
      } else if (result <= 99) {
        emojiReaction.innerHTML = "";
        emojiReaction.appendChild(document.createTextNode("😁"));
      } else if (result === 100) {
        emojiReaction.innerHTML = "";
        emojiReaction.appendChild(document.createTextNode("🤩"));
      }
      active = false;
    }, 2000);
    return;
  }
  if (e.keyCode == "32") {
    generateNumber();
    var result = generateNumber();
    var getP = document.getElementById("generated-number");
    getP.innerHTML = "";
    getP.appendChild(document.createTextNode(result));
    if (result <= 10) {
      emojiReaction.innerHTML = "";
      emojiReaction.appendChild(document.createTextNode("😭"));
    } else if (result <= 25) {
      emojiReaction.innerHTML = "";
      emojiReaction.appendChild(document.createTextNode("😢"));
    } else if (result <= 50) {
      emojiReaction.innerHTML = "";
      emojiReaction.appendChild(document.createTextNode("🙁"));
    } else if (result <= 75) {
      emojiReaction.innerHTML = "";
      emojiReaction.appendChild(document.createTextNode("😕"));
    } else if (result <= 90) {
      emojiReaction.innerHTML = "";
      emojiReaction.appendChild(document.createTextNode("🙂"));
    } else if (result <= 99) {
      emojiReaction.innerHTML = "";
      emojiReaction.appendChild(document.createTextNode("😁"));
    } else if (result === 100) {
      emojiReaction.innerHTML = "";
      emojiReaction.appendChild(document.createTextNode("🤩"));
    }
    active = false;
  }
}

function addLoader() {
  var getP2 = document.getElementById("generated-number");
  getP2.innerHTML = "";
  getP2.innerHTML =
    '<svg id="loader" viewBox="0 0 340 340"> <circle cx="170" cy="170" r="160"/> <circle cx="170" cy="170" r="135"/> <circle cx="170" cy="170" r="110"/> <circle cx="170" cy="170" r="85"/> </svg>';
}
