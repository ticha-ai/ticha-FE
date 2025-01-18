const createCSSVariables = (
  themeObject: object,
  prefix = '',
): Record<string, string> => {
  const cssVariables: Record<string, string> = {};

  const flattenObject = (obj: object, parentKey = '') => {
    Object.entries(obj).forEach(([key, value]) => {
      const variableName = `${parentKey}-${key}`.replace(/^-/, '');
      if (typeof value === 'object') {
        flattenObject(value, variableName);
      } else {
        cssVariables[`--${prefix}--${variableName}`] = value;
      }
    });
  };

  flattenObject(themeObject);
  return cssVariables;
};

export default createCSSVariables;
