const baseConfig = require('../../jest.config');

module.exports = {
  ...baseConfig,
  testMatch: ['<rootDir>/packages/core/__tests__/**/*.{js,jsx,ts,tsx}'],
};
