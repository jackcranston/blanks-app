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

    // set up form event listener
    const formElement = document.getElementById("form");
    formElement.addEventListener("submit", function (event) {
      form.submitStory(event);
    });
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
              <fieldset>
                <button>Create your story</button>
              </fieldset>
            </form>`;
  },

  // get form inputs
  inputElements: function (words, wordtypes) {
    return words
      .map((word, index) => {
        const wordtype = this.getWordTypes(word, wordtypes);

        return `<fieldset>
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
