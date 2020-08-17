// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.render("index", { layout: "main" });
  });
  app.get("/aboutus", (req, res) => {
    res.render("aboutus", { layout: "main" });
  });
  app.get("/associates", (req, res) => {
    res.render("associates", { layout: "main" });
  });
  app.get("/colonoscopy", (req, res) => {
    res.render("colonoscopy", { layout: "main" });
  });
  app.get("/upperendoscopy", (req, res) => {
    res.render("upperendoscopy", { layout: "main" });
  });
  app.get("/contactus", (req, res) => {
    res.render("aboutus", { layout: "main" });
  });
};
