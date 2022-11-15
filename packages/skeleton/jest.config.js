const baseConfig = require('../../jest.config');

module.exports = {
  ...baseConfig,
  testMatch: ['<rootDir>/packages/skeleton/__tests__/**/*.{js,jsx,ts,tsx}'],
};
