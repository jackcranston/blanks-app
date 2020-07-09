/*
 * Form component
 */

const form = {
  init: function (stories, id) {
    const selectedStory = this.getStory(stories, id);

    state.game = selectedStory;
    state.game.words = this.getTemplates(selectedStory);
  },

  getStory: function (stories, id) {
    return stories.find((story) => {
      if (story.id === id) {
        return story;
      }
    });
  },

  getTemplates: function (selectedStory) {
    // pattern to match anything in double curly braces {{ }}
    const regexPattern = /\{{.*?\}}/g;
    const templateWordsArray = selectedStory.body.match(regexPattern);

    return templateWordsArray;
  },
};
