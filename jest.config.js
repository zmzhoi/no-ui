const rootDir = __dirname;

module.exports = {
  rootDir,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup/jestSetup.ts'],
  testMatch: ['<rootDir>/packages/**/__tests__/**/*.{js,jsx,ts,tsx}'],
  globals: {
    __VERSION__: true,
  },
  moduleNameMapper: {
    // Asset 파일 로드시 mocking
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/setup/jestAssetTransformer.ts',
    '\\.(css|scss)$': '<rootDir>/setup/jestStyleTransformer.ts',
  },
};
