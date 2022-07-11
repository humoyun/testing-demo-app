import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    // testFiles: '**/*.test.{ts,tsx}',
    // componentFolder: 'src',
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },
});
