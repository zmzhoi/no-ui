const baseConfig = require('../../jest.config');

module.exports = {
  ...baseConfig,
  testMatch: ['<rootDir>/packages/popper/__tests__/**/*.{js,jsx,ts,tsx}'],
};
