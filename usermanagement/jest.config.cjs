module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,          
  coverageDirectory: "coverage",
  
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
  
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  
  transform: {
    // THE FIX: Changed this line to catch BOTH .ts and .js files
    '^.+\\.(ts|js)$': [
      'ts-jest',
      {
        useESM: false,
        tsconfig: {
          module: 'CommonJS', 
          moduleResolution: 'node',
          allowJs: true // THE FIX: Tells ts-jest it has permission to translate JavaScript
        }
      }
    ]
  }
};