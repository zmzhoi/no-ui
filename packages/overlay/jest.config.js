const baseConfig = require('../../jest.config');

module.exports = {
  ...baseConfig,
  testMatch: ['<rootDir>/packages/overlay/__tests__/**/*.{js,jsx,ts,tsx}'],
};
