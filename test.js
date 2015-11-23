'use strict';
import test from 'ava';
import hexToRgb from './index.js';

test(t => {
  t.is(hexToRgb('#0099ff'), 'rgb(0, 153, 255)');
  t.is(hexToRgb('#000000'), 'rgb(0, 0, 0)');
  t.is(hexToRgb('#bde'), 'rgb(187, 221, 238)');

  t.is(hexToRgb('#98d', true), 'rgba(153, 136, 221, 1)');
  t.is(hexToRgb('#ff00dd', true), 'rgba(255, 0, 221, 1)');

  t.throws(function () {
    hexToRgb('#dfgfgd');
  });

  t.throws(function () {
    hexToRgb(null);
  });

  t.end();
});
