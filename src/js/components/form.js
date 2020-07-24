/*
 * Form component
 */

const form = {
  // Initialise form
  init: function (id, stories, wordtypes) {
    const selectedStory = this.getStory(id, stories);
    const words = this.getWords(selectedStory);

    state.story = selectedStory;
    state.story.words = words;

    ui.update(this.formElement(words, wordtypes));

    // Event Listener - form navigation
    state.formIndex = 0;

    const inputGroups = document.querySelectorAll(".input-group");
    const formNavigationButtons = document.querySelectorAll(
      ".form-nav__button"
    );

    formNavigationButtons.forEach((navigationButton) => {
      navigationButton.addEventListener("click", function (event) {
        form.formNavigation(event, inputGroups);
      });
    });

    inputGroups[0].classList.remove("hidden");

    // Event Listener - form submit
    const formElement = document.getElementById("form");
    formElement.addEventListener("submit", this.submitStory);
  },

  // Handles form navigation buttons
  formNavigation: function (event, inputGroups) {
    event.preventDefault();

    const nav = Number(event.target.dataset.nav);

    // hide current input group
    inputGroups[state.formIndex].classList.add("hidden");

    // increase/decrease form index
    state.formIndex += nav;

    // show next input group
    [...inputGroups].find((inputGroup) => {
      if (Number(inputGroup.dataset.id) === state.formIndex) {
        inputGroup.classList.remove("hidden");
      }
    });

    if (state.formIndex === 0) {
      document.getElementById("form-back").classList.add("hidden");
    } else if (state.formIndex === inputGroups.length - 1) {
      document.getElementById("form-next").classList.add("hidden");
    } else {
      document.getElementById("form-next").classList.remove("hidden");
      document.getElementById("form-back").classList.remove("hidden");
    }
  },

  // get story from stories.json
  getStory: function (id, stories) {
    return stories.find((story) => {
      if (story.id === id) {
        return story;
      }
    });
  },

  // extract template words from story
  getWords: function (selectedStory) {
    // pattern to match anything in double curly braces {{ }}
    const regexPattern = /\{{.*?\}}/g;
    const templateWordsArray = selectedStory.body.match(regexPattern);

    return templateWordsArray;
  },

  // remove template braces from word
  getStrippedWord: function (word) {
    return word.replace("{{", "").replace("}}", "");
  },

  // get word details from wordtypes.json
  getWordTypes: function (word, wordtypes) {
    const strippedWord = this.getStrippedWord(word);

    return wordtypes.find((wordtype) => {
      if (wordtype.type === strippedWord) {
        return wordtype;
      }
    });
  },

  // get form wrapper
  formElement: function (words, wordtypes) {
    return `<form id="form">
              ${this.inputElements(words, wordtypes)}
              <fieldset data-id=${words.length} class="input-group hidden">
                <button>Create your story</button>
              </fieldset>
            </form>
            <div class="form-nav">
              <button id="form-back" class="form-nav__button hidden" data-nav=-1>Back</button>
              <button id="form-next" class="form-nav__button" data-nav=1>Next</button>
            </div>`;
  },

  // get form inputs
  inputElements: function (words, wordtypes) {
    return words
      .map((word, index) => {
        const wordtype = this.getWordTypes(word, wordtypes);

        return `<fieldset data-id=${index} class="input-group hidden">
                  <label for="input-${index}">
                    <h2>${wordtype.type}</h2>
                    <p>${wordtype.body}</p>
                  </label>
                  <input id="input-${index}" class="input" type="text" placeholder="e.g. ${wordtype.examples}">
                </fieldset>`;
      })
      .join("");
  },

  // fired when user submits story form
  submitStory: function (event) {
    event.preventDefault();

    const inputs = document.querySelectorAll("input");
    const inputWords = [...inputs].map((input) => {
      return input.value;
    });

    this.createStory(inputWords);
  },

  // replace original story templates with input values
  createStory: function (inputWords) {
    const { title, body, words } = state.story;

    let createdStory = body;

    words.forEach((word, index) => {
      createdStory = createdStory.replace(word, inputWords[index]);
    });

    ui.update(this.storyElement(title, createdStory));
  },

  // story element
  storyElement: function (title, createdStory) {
    return `<div class="story">
              <h1>${title}</h1>
              <p>${createdStory}</p>
            </div>`;
  },
};
