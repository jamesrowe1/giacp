//Dependencies
// const fs = require("fs");
// const inquirer = require("inquirer");
// const generateHTML = require("./generateHTML.js");
// const generateHTMLIndex = require("./generateHTMLIndex.js");
// const util = require("util");
// const { async } = require("rxjs");

//asynch fs
// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);
// const appendFileAsync = util.promisify(fs.appendFile);

async function init() {
  console.log(this);
  let indexInfo = "";
  switch (this.document.title) {
    case "GIACP":
      indexInfo = generateHTMLIndex();
      break;
    case "About Us":
      indexInfo = generateHTMLAboutUs();
      break;
    case "Contact Us":
      indexInfo = generateHTMLContactUs();
      break;
    case "Associates":
      indexInfo = generateHTMLAssociates();
      break;
    case "Upper Endoscopy":
      indexInfo = generateHTMLUpperEndoscopy();
      break;
    case "Colonoscopy":
      indexInfo = generateHTMLColonoscopy();
  }
  const htmlFile = generateHTML(indexInfo);
  this.document.body.insertAdjacentHTML("afterBegin", htmlFile);
  //appendFileAsync("index.html", htmlFile);
}
