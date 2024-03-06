import {
    oldMapGif,
    newMapGif,
} from './gifs';

import { findCookie } from './findCookie';
import { SVG_TYPE_COOKIE } from './constants';

function getSVGAssets() {
    const svgTypeCookie = findCookie(SVG_TYPE_COOKIE);
    const isNewSvg = svgTypeCookie.value === 'true';
    const assets = {
      map: isNewSvg ? newMapGif : oldMapGif
    };

    return assets;
  }
  
  module.exports = { getSVGAssets };