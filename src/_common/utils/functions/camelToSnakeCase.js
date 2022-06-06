export const camelToSnakeCase = (str) =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

export const objectCamelToSnakeCase = (obj) => {
  // Object.keys(item).map()
  //   str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
};
