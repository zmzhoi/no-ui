const baseConfig = require('../../jest.config');

module.exports = {
  ...baseConfig,
  testMatch: ['<rootDir>/packages/portal/__tests__/**/*.{js,jsx,ts,tsx}'],
};
