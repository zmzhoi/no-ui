const baseConfig = require('../../jest.config');

module.exports = {
  ...baseConfig,
  testMatch: ['<rootDir>/packages/tooltip/__tests__/**/*.{js,jsx,ts,tsx}'],
};
