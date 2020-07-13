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

    ui.update(this.getForm(words, wordtypes));
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
  getForm: function (words, wordtypes) {
    return `<form>
              ${this.getInputs(words, wordtypes)}
            </form>`;
  },

  // get form inputs
  getInputs: function (words, wordtypes) {
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
};
