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
    res.redirect(
      "https://www.medentmobile.com/portal/index.php?practice_id=9GCvbWd2"
    );
  });
  app.get("/24hrph", (req, res) => {
    res.render("24hrph", { layout: "main" });
  });
  app.get("/directions", (req, res) => {
    res.render("directions", { layout: "main" });
  });
  app.get("/ercp", (req, res) => {
    res.render("ercp", { layout: "main" });
  });
  app.get("/esophagealmanometry", (req, res) => {
    res.render("esophagealmanometry", { layout: "main" });
  });
  app.get("/flexiblesigmoidoscopy", (req, res) => {
    res.render("flexiblesigmoidoscopy", { layout: "main" });
  });
  app.get("/insurance", (req, res) => {
    res.render("insurance", { layout: "main" });
  });
  app.get("/jcaho", (req, res) => {
    res.render("jcaho", { layout: "main" });
  });
  app.get("/liverbiopsy", (req, res) => {
    res.render("liverbiopsy", { layout: "main" });
  });
  app.get("/screeningcolonoscopy", (req, res) => {
    res.render("screeningcolonoscopy", { layout: "main" });
  });
};
