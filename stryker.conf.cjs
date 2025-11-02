/** @type {import('@stryker-mutator/core').StrykerOptions} */
module.exports = {
  packageManager: "npm",
  reporters: [
    "html",
    "clear-text",
    "progress"
  ],
  testRunner: "jest",
  coverageAnalysis: "perTest",
  ignoreMutations: [
    "28",
    "29",
    "30",
    "32",
    "135",
    "142",
    "146"
  ]
};
