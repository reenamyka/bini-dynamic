// data = original data from wordpress
// dataFromLocal = data from data.js
const objectNullModifier = (origData, dataFromLocal) => {
  // Check if any object in the array has a property with a null value
  const hasNullProperty = origData.some((obj) =>
    Object.entries(obj).some(([key, value]) => value === null)
  );

  // If there are null values, update them with data from local data.js
  if (hasNullProperty) {
    origData.forEach((data) => {
      const objectFromLocal = dataFromLocal.find(
        (obj) => obj?.nickname?.toLowerCase() === data?.nickname?.toLowerCase()
      );

      if (objectFromLocal) {
        for (const property in objectFromLocal) {
          // Update null properties in the original data with values from the local data.js
          if (data[property] === null) {
            data[property] = objectFromLocal[property];
          }
        }
      }
    });
  }

  return origData;
};

export default objectNullModifier;
