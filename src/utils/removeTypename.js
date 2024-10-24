// Removes the "__typename in the response from Wordpress"
const removeTypename = (obj) => {
  if (typeof obj !== "object" || obj === null) return obj;

  const newObj = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (key !== "__typename") {
      newObj[key] = removeTypename(obj[key]);
    }
  }

  return newObj;
};

export default removeTypename;
