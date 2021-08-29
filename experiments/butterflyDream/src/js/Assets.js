import { GL, GLTexture, GLCubeTexture, parseDds, parseObj } from "alfrid";
let _assets;

const init = (mAssets) => {
  _assets = mAssets.map((asset) => {
    const { id, type, file: source } = asset;
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
            { type: GL.FLOAT },
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
      type,
      source,
      file,
    };
  });
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
