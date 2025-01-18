import theme from '@/styles/theme';
import createCSSVariables from '@/utils/createCSSVariables';

const cssVariables = {
  ...createCSSVariables(theme.colors, 'color'),
  ...createCSSVariables(theme.typography, 'typography'),
};

const CSSPreloader = () => {
  return (
    <head>
      <style>
        {`:root {
      ${Object.entries(cssVariables)
        .map(([key, value]) => `${key}: ${value};`)
        .join(' ')}
    }`}
      </style>
    </head>
  );
};

export default CSSPreloader;
