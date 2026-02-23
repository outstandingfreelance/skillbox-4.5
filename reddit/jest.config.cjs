const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: "node",
  // setupFilesAfterEnv: ['<rootDir>/src/jest.setup.cjs'],
  moduleNameMapper: {
    // '\\.(css)$': 'identity-obj-proxy',
    '\\.module\\.(css|less|scss|sass)$': 'jest-transform-stub',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    // ...tsJestTransformCfg,
    '^.+\\.(ts|tsx)$': 'ts-jest', 
    '^.+\\.(css|less|scss|sass)$': 'jest-transform-stub',
  },
  testMatch: [
    '**/__tests__/**/*.(ts|tsx|js)',
    '**/*.(test|spec).(ts|tsx|js)',
  ],
  transformIgnorePatterns: [
    // 'node_modules/(?!(your-css-module-library)/)',
  ],
};
// 
