module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        "^.+\\.jsx?$": "esbuild-jest-transform"
    },
    verbose: true,
  };