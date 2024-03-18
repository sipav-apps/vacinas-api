export const nulifyObjectStrings = (values) => {
  // remove empty strings
  for (let [key, value] of Object.entries(values)) {
    if (value instanceof String) {
      value = value.trim();
    }
    if (!value) {
      values[key] = undefined;
    }
  }
  return values;
};
