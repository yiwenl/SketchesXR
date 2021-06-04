const fs = require("fs-extra");

const mkdirp = require("mkdirp");
const experiments = require("../dev/src/data/SiteModel.js");

// constans
const PATH_INDEX_FILE = "./index.html";

// utils
const replace = (str, a, b) => {
  return str.split(a).join(b);
};

const remove = (str, a) => {
  return replace(str, a, "");
};

// DEBUG
// const expTitle = "Sketches XR | Typography";
// const expURL = `"https://yiwenl.github.io/SketchesXR/exps/1/"`;
// const expCover = "assets/img/coverTypography.jpg";

// load index file
const loadIndexFile = () =>
  new Promise((resolve, reject) => {
    fs.readFile(PATH_INDEX_FILE, "utf8", (err, str) => {
      if (err) {
        reject(err);
      } else {
        // const cssPattern = /css.*\.css/g;
        // const jsPattern = /js.*\.js/g;

        // const cssPath = str.match(cssPattern);
        // const jsPaths = str.match(jsPattern);

        str = replace(str, "/SketchesXR/static", "../..");
        str = replace(str, "/SketchesXR/manifest.json", "../../manifest.json");
        str = replace(str, "/SketchesXR/favicon.ico", "../../favicon.ico");

        // console.log(str);
        // replace title

        resolve(str);
      }
    });
  });

const writeFile = (str, pathTarget, title, url, cover) => {
  str = replace(str, "Sketches - XR", title);
  str = replace(str, "SketchesXR | Yi-Wen Lin", title);
  str = replace(str, `"http://yiwenl.github.io/SketchesXR/"`, url);
  str = replace(str, `assets/img/coverSketches.jpg`, cover);

  fs.writeFile(pathTarget, str, (err, data) => {
    if (err) {
      console.log("Error Writing File");
    } else {
      console.log("Done");
    }
  });
};

loadIndexFile()
  .then((str) => {
    experiments.forEach(({ cover, title }, i) => {
      const folderPath = `./exps/${i + 1}`;
      // console.log(i, title, cover, folderPath);

      mkdirp(folderPath).then(
        (o) => {
          // console.log("done", i, folderPath);
          const expTitle = `Sketches XR | ${title}`;
          const expURL = `"https://yiwenl.github.io/SketchesXR/exps/${i + 1}/"`;
          const expCover = cover;
          const pathTarget = `${folderPath}/index.html`;
          writeFile(str, pathTarget, expTitle, expURL, expCover);
        },
        (e) => console.log("Error", e)
      );
    });
  })
  .catch((e) => {
    console.log("Error", e);
  });
