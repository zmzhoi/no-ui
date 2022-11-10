const rootDir = __dirname;

module.exports = {
  rootDir,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup/jestSetup.ts'],
  testMatch: ['<rootDir>/packages/**/__tests__/**/*.{js,jsx,ts,tsx}'],
  globals: {
    __VERSION__: true,
  },
};
