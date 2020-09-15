const { storage } = require("./firebase");

export const uploadImage = (file) => {
  const splited = file.name.split(".");
  const filename = `${Date.now()}.${splited[splited.length - 1]}`;
  const ref = storage.ref().child(`avatar/${filename}`);
  return ref.put(file).then(() => {
    return ref.getDownloadURL();
  });
};
