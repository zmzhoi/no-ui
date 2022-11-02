const rootDir = process.cwd();

module.exports = {
  rootDir,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/utils/jestSetup.ts'],
  testMatch: ['<rootDir>/packages/**/__tests__/**/*.{js,jsx,ts,tsx}'],
};
