const baseConfig = require('../../jest.config');

module.exports = {
  ...baseConfig,
  testMatch: ['<rootDir>/packages/loader/__tests__/**/*.{js,jsx,ts,tsx}'],
};
