/*
 * Form component
 */
import state from "../state";
import ui from "./ui";

const form = {
  // Initialise form
  init: (id, stories, wordtypes) => {
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
      navigationButton.addEventListener("click", (event) => {
        form.formNavigation(event, inputGroups);
      });
    });

    inputGroups[0].classList.remove("hidden");

    // Event Listener - form submit
    const formElement = document.getElementById("form");
    formElement.addEventListener("submit", this.submitStory);
  },

  // Handles form navigation buttons
  formNavigation: (event, inputGroups) => {
    event.preventDefault();

    const nav = Number(event.target.dataset.nav);

    const formBack = document.getElementById("form-back");
    const formNext = document.getElementById("form-next");

    // hide current input group
    inputGroups[state.formIndex].classList.add("hidden");

    // increase/decrease form index
    state.formIndex += nav;

    // show next input group
    [...inputGroups].forEach((inputGroup) => {
      if (Number(inputGroup.dataset.id) === state.formIndex) {
        inputGroup.classList.remove("hidden");
      }
    });

    if (state.formIndex === 0) {
      formBack.classList.add("hidden");
    } else if (state.formIndex === inputGroups.length - 1) {
      formNext.classList.add("hidden");
    } else {
      formNext.classList.remove("hidden");
      formBack.classList.remove("hidden");
    }
  },

  // get story from stories.json
  getStory: (id, stories) => {
    return stories.find((story) => (story.id === id ? story : false));
  },

  // extract template words from story
  getWords: (selectedStory) => {
    // pattern to match anything in double curly braces {{ }}
    const regexPattern = /\{{.*?\}}/g;
    const templateWordsArray = selectedStory.body.match(regexPattern);

    return templateWordsArray;
  },

  // remove template braces from word
  getStrippedWord: (word) => {
    return word.replace("{{", "").replace("}}", "");
  },

  // get word details from wordtypes.json
  getWordTypes: (word, wordtypes) => {
    const strippedWord = this.getStrippedWord(word);

    return wordtypes.find((wordtype) =>
      wordtype.type === strippedWord ? wordtype : false
    );
  },

  // get form wrapper
  formElement: (words, wordtypes) => {
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
  inputElements: (words, wordtypes) => {
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
  submitStory: (event) => {
    event.preventDefault();

    const inputs = document.querySelectorAll("input");
    const inputWords = [...inputs].map((input) => {
      return input.value;
    });

    this.createStory(inputWords);
  },

  // replace original story templates with input values
  createStory: (inputWords) => {
    const { title, body, words } = state.story;

    let createdStory = body;

    words.forEach((word, index) => {
      createdStory = createdStory.replace(word, inputWords[index]);
    });

    ui.update(this.storyElement(title, createdStory));
  },

  // story element
  storyElement: (title, createdStory) => {
    return `<div class="story">
              <h1>${title}</h1>
              <p>${createdStory}</p>
            </div>`;
  },
};

export default form;
