let _assets;

const init = (mAssets) => {
  _assets = mAssets;
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
