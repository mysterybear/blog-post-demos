module.exports = {
  extends: "lighthouse:default",
  output: "json",
  settings: {
    // onlyCategories: ["performance"],
    onlyAudits: [
      "first-contentful-paint",
      "speed-index",
      "interactive",
      "first-meaningful-paint",
      "first-cpu-idle",
      "max-potential-fid",
    ],
  },
}
