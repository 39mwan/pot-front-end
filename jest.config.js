module.exports = {
  roots: ['./src'],
  // setupFiles: ["./src/setupTests.ts"],
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.svg$': './jest.file.js'
  },
  testMatch: [
    './src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{spec,test}.{js,jsx,ts,tsx}'
  ],
  moduleNameMapper: {
    '\\.(css|sass|scss)$': 'identity-obj-proxy'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/api/interfaces/*.ts', '!src/serviceWorker.ts'],
  moduleDirectories: ['node_modules', 'src']
}