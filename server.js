// Requiring necessary npm packages
require("dotenv").config();
const express = require("express");
const session = require("express-session");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Requiring our routes
require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

app.use(express.static(__dirname + "/"));

app.listen(PORT, () => {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});

const workboxBuild = require("workbox-build");

// NOTE: This should be run *AFTER* all your assets are built
const buildSW = () => {
  // This will return a Promise
  return workboxBuild.generateSW({
    globDirectory: "/",
    globPatterns: ["**/*.{html,json,js,css,handlebars}"],
    swDest: "sw.js",

    // Define runtime caching rules.
    runtimeCaching: [
      {
        // Match any request that ends with .png, .jpg, .jpeg or .svg.
        // urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
        urlPattern: new RegExp("/"),
        // Apply a cache-first strategy.
        handler: "CacheFirst",

        options: {
          // Use a custom cache name.
          cacheName: "images",

          // Only cache 10 images.
          expiration: {
            maxEntries: 10
          }
        }
      }
    ]
  });
};

buildSW();
