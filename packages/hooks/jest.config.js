const baseConfig = require('../../jest.config');

module.exports = {
  ...baseConfig,
  testMatch: ['<rootDir>/packages/hooks/__tests__/**/*.{js,jsx,ts,tsx}'],
};
