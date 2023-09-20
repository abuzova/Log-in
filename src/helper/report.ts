const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "test-results/reports/",
  metadata: {
    browser: {
      name: "chrome",
      version: "118",
    },
    device: "repository: abuzova/Log-in",
    platform: {
      name: "ubuntu",
      version: "22.04.3",
    },
  },
});