import newMap from './gifs/newMap.svg';
import oldMap from './gifs/oldMap.svg';

import { findCookie } from './findCookie';
import { SVG_TYPE_COOKIE } from './constants';

function getSVGAssets() {
    const svgTypeCookie = findCookie(SVG_TYPE_COOKIE);
    const isNewSvg = svgTypeCookie && (svgTypeCookie.value === 'true');
    const assets = {
      map: isNewSvg ? newMap : oldMap
    };

    return assets;
  }
  
  module.exports = { getSVGAssets };