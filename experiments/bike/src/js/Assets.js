let _assets;
import { GL, GLTexture, GLCubeTexture, parseObj, parseDds } from "alfrid";

const glFLOAT = 5126;

const init = (mAssets) => {
  _assets = mAssets.map(({ id, type, file: source }) => {
    let file;
    switch (type) {
      case "jpg":
      case "png":
        file = new GLTexture(source);
        break;
      case "binary":
        if (id.indexOf("radiance") > -1) {
          const dataTexture = parseDds(source);
          const sourceTexture = dataTexture.map((o) => o.data);
          file = new GLCubeTexture(
            sourceTexture,
            { type: glFLOAT },
            dataTexture[0].shape[0],
            dataTexture[0].shape[1]
          );
        }
        break;
      case "text":
        file = parseObj(source);
        break;
    }

    return {
      id,
      source,
      type,
      file,
    };
  });
  console.table(_assets);
};

const get = (mName) => {
  const asset = _assets.find((o) => o.id === mName);
  if (!asset) {
    return null;
  }

  return asset.file;
};

const Assets = {
  init,
  get,
};

export default Assets;
