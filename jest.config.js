module.exports = {
  testMatch: ['<rootDir>/src/**/*test.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  // testPathIgnorePatterns: ['/node_modules/', '/next/'],
  // moduleNameMapper: {
  //   '^styled-components':
  //     '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js',
  // },
}
