const fs = require("fs-extra");
const experiments = require("../src/data/SiteModel.js");

// constans
const PATH_INDEX_FILE = "../index.html";

// utils
const replace = (str, a, b) => {
  return str.split(a).join(b);
};

// load index file
const loadIndexFile = () =>
  new Promise((resolve, reject) => {
    fs.readFile(PATH_INDEX_FILE, "utf8", (err, str) => {
      if (err) {
        reject(err);
      } else {
        str = replace(str, "/SketchesXR/static", "../../static");
        str = replace(str, "/SketchesXR/manifest.json", "../../manifest.json");
        str = replace(str, "/SketchesXR/favicon.ico", "../../favicon.ico");

        resolve(str);
      }
    });
  });

const writeFile = (str, pathTarget, title, url, cover) => {
  console.log("Create index file : ", pathTarget, title, url);
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
      const folderPath = `../exps/${i + 1}`;

      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
      }

      const expTitle = `Sketches XR | ${title}`;
      const expURL = `"https://yiwenl.github.io/SketchesXR/exps/${i + 1}/"`;
      const expCover = cover;
      const pathTarget = `${folderPath}/index.html`;
      writeFile(str, pathTarget, expTitle, expURL, expCover);
    });

    // update about page
    let strAbout = replace(str, "../../static", "../static");
    strAbout = replace(strAbout, "../../manifest.json", "../manifest.json");
    strAbout = replace(strAbout, "../../favicon.ico", "../favicon.ico");

    const pathAbout = `../about/index.html`;
    fs.writeFile(pathAbout, strAbout, (err, data) => {
      if (err) {
        console.log("Error Writing File", pathAbout, err);
      } else {
        console.log("Done");
      }
    });
  })
  .catch((e) => {
    console.log("Error", e);
  });
