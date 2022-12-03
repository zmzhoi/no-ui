const baseConfig = require('../../jest.config');

module.exports = {
  ...baseConfig,
  testMatch: ['<rootDir>/packages/close-button/__tests__/**/*.{js,jsx,ts,tsx}'],
};
