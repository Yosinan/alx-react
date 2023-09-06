module.exports = {
  testEnvironment: "jsdom",
  jest: {
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    },
  },
};
