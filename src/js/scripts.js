/* globals */

var loaded = false;
var state = 0; // 0:not loaded, 1:main menu, 2:in-game, 3:dropdown

var menu;
var nav;
var overlay;
var form;
var result;

var savedNames = [];
var savedWords = [];

var currentTab = 0;
var game;
var story;
var storyString;

var menuCounter = 0;

/* app start */

/* classes */

class Game {
  quit(x) {
    if (x) {
      overlay.classList.add("active");
      overlay.innerHTML =
        '<h2>Do you want to quit the game?</h2><a class="button" onclick="navigator.app.exitApp()">Yes</a><a class="button" onclick="quit(false)">No</a>';
    } else {
      overlay.classList.remove("active");
    }
  }
  quitConfirm(button) {
    if (button == 2) {
      return;
    } else {
      navigator.app.exitApp();
    }
  }

  backButton() {
    if (story.title !== "") {
      game.returnToMenu("0");
    } else {
      game.returnToMenu("1");
    }
  }
  returnToMenu(i) {
    overlay.classList.add("active");
    overlay.innerHTML =
      '<div class="confirm">Are you sure?<a class="button" onclick="game.returnConfirm(-1)">No</a><a class="button" onclick="game.returnConfirm(' +
      i +
      ')">Yes</a></div>';
  }
  returnConfirm(i) {
    if (i == 0) {
      location.reload();
    } else if (i == 1) {
      navigator.app.exitApp();
    } else {
      this.help(false);
    }
  }

  help(x) {
    if (x) {
      overlay.classList.add("active");
      overlay.innerHTML = tutorial;
      overlay.innerHTML +=
        '<a class="overlay-button" onclick="game.help(false)">Close</a>';
    } else {
      overlay.classList.remove("active");
    }
  }
}

class Story {
  constructor(title, text, words, names, category) {
    this.title = title;
    this.text = text;
    this.words = words;
    this.names = names;
    this.category = category;
  }

  generateForm() {
    nav.innerHTML =
      '<a class="nav-button" onclick="game.backButton()">< QUIT</a>';
    menu.style.display = "none";
    overlay.innerHTML =
      '<div class="gamePopup"><h2 class="title">' +
      story.title +
      '</h2><a class="overlay-button" onclick="game.help(false)">START GAME</a></div>';
    overlay.classList.add("active");

    for (var i = 0; i < story.names.length; i++) {
      form.innerHTML +=
        '<div class="tab"><h2>' +
        story.names[i][0] +
        '</h2><input class="name" placeholder="' +
        story.names[i][1] +
        '"/></tab>';
    }
    for (var i = 0; i < story.words.length; i++) {
      form.innerHTML +=
        '<div class="tab"><h2>' +
        story.words[i][0] +
        '</h2><input class="word" placeholder="' +
        story.words[i][1] +
        '"/></tab>';
    }

    formWrapper.innerHTML += `<div class="gameNavWrap">
                                <div class="gameNav">
                                  <button type="button" class="prev" onclick="formNav(-1)">Back</button>
                                  <button type="button" class="next" onclick="formNav(1)">Next Player</button>
                                  <button type="button" class="generate" onclick="story.submitStory(1)">Generate</button>
                                </div>
                              </div>`;

    document.querySelector(".tab").classList.add("active");
  }

  submitStory(i) {
    var inputVals = document.querySelectorAll("input");
    var error = document.querySelector(".error");
    if (inputVals[currentTab].value === "") {
      error.innerHTML = "Nothing entered";
    } else {
      var nameVals = document.querySelectorAll(".name");
      var wordVals = document.querySelectorAll(".word");

      for (var i = 0; i < nameVals.length; i++) {
        savedNames.push(nameVals[i].value);
      }
      for (var i = 0; i < wordVals.length; i++) {
        savedWords.push(wordVals[i].value);
      }
      story.generateResult();
    }
  }

  generateResult() {
    storyString = story.text;
    var blankWords = [];
    var blankNames = [];

    for (var i = 1; i <= story.names.length; i++) {
      blankNames.push("NAME");
    } // calculates number of blank names and prepares

    for (var i = 1; i <= story.words.length; i++) {
      blankWords.push("XXX");
    } // calculates number of blank words and prepares

    for (var i = 0; i <= blankNames.length; i++) {
      var finalStory = storyString.replace(
        blankNames[i],
        "<span>" + savedNames[i] + "</span>"
      );
      storyString = finalStory;
    } // replaces blanks with names

    for (var i = 0; i <= blankWords.length; i++) {
      var finalStory = storyString.replace(
        blankWords[i],
        "<span>" + savedWords[i] + "</span>"
      );
      storyString = finalStory;
    } // replaces blanks with words

    formWrapper.classList.add("hide");

    result.innerHTML =
      "<p><h2>" +
      story.title +
      "</h2>" +
      finalStory +
      '</p><a class="overlay-button" onclick="game.backButton()">Return to menu</a>';
    result.classList.add("show");
  } // loops through savedWords and replaces each blank
}

function setStory(i) {
  story = new Story(
    stories[i].title,
    stories[i].text,
    stories[i].words,
    stories[i].names,
    stories[i].category
  );
  story.generateForm();
}

/* tabs */

function formNav(i) {
  var inputVals = document.querySelectorAll("input");
  var error = document.querySelector(".error");
  if (i == 1) {
    document.querySelector(".overlay").innerHTML =
      '<div class="gamePopup"><h2 class="title">Pass to next player</h2><a class="overlay-button" onclick="game.help(false)">Ready?</a></div>';
  } else if (i == -1) {
    document.querySelector(".overlay").innerHTML =
      '<div class="gamePopup"><h2 class="title">Back clicked, pass to previous player</h2><a class="overlay-button" onclick="game.help(false)">Ready?</a></div>';
  }
  if (inputVals[currentTab].value === "" && i === 1) {
    error.innerHTML = "Nothing entered";
  } else {
    error.innerHTML = "";
    currentTab = currentTab + i;

    var gen = document.querySelector(".generate");
    var prev = document.querySelector(".prev");
    var next = document.querySelector(".next");

    if (currentTab === 0) {
      gen.style.display = "none";
      prev.style.display = "none";
      next.style.display = "block";
      overlay.classList.add("active");
    } else if (currentTab === inputVals.length - 1) {
      next.style.display = "none";
      prev.style.display = "block";
      gen.style.display = "block";
      overlay.classList.add("active");
    } else {
      gen.style.display = "none";
      prev.style.display = "block";
      next.style.display = "block";
      overlay.classList.add("active");
    }
    tabs = document.querySelectorAll(".tab");
    tabs[currentTab - i].classList.remove("active");
    tabs[currentTab].classList.add("active");
  }
} // next and previous tab on button click
