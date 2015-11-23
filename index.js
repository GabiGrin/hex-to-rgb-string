'use strict';

module.exports = function (hex, useAlpha) {
  var decimalValue, r, g, b, components;
  if (!hex || !hex.match(/^#(?:[0-9a-f]{3}){1,2}$/i)) {
    throw new Error ('invalid hex color string', hex);
  }

  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex = hex.split('').map(function (char) {
      return char + char;
    }).join('');
  }

  decimalValue = parseInt(hex, 16);
  r = (decimalValue >> 16) & 255;
  g = (decimalValue >> 8) & 255;
  b = decimalValue & 255;

  components = [r, g, b];
  if (useAlpha) {
    components.push(1);
  }

  return 'rgb' + (useAlpha ? 'a' : '') + '(' + components.join(', ') + ')';
};
