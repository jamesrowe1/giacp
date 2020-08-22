const workboxBuild = require("workbox-build");

// NOTE: This should be run *AFTER* all your assets are built
const buildSW = () => {
  // This will return a Promise
  return workboxBuild.generateSW({
    globDirectory: "build",
    globPatterns: ["**/*.{html,json,js,css}"],
    swDest: "build/sw.js"
  });
};
