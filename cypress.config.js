const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {
    env: {
      BASE_URL: 'https://demoqa.com',
    },
  },
});
