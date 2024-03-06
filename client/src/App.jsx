import { useState, useEffect } from 'react'
import './App.css'

import { getSVGAssets } from '@auxfix/gif_server';
export const SVG_TYPE_COOKIE = 'svg-type';

function setCookie(name, value, daysToExpire) {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + daysToExpire);

  const cookieString = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;

  document.cookie = cookieString;
}

export function findCookie(cookieName) {
  const cookies = document.cookie.split(';');

  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');

    if (name === cookieName) {
      return { name, value };
    }
  }

  return null;
}

function App() {
  const [isNewSVGCookie, setIsNewSVGCookie] = useState(false);
  const [svg, setSvg] = useState(getSVGAssets().map);

  useEffect(() => {
    setCookie(SVG_TYPE_COOKIE, isNewSVGCookie ? 'true': 'false', 100);
    const svgAsset = getSVGAssets();
    setSvg(svgAsset);
  },[isNewSVGCookie])

  const { name, value } = findCookie(SVG_TYPE_COOKIE);

  return (
    <>
      <div>
       <img style={{width: '100px', height: '100px'}} src={svg.map} />
      </div>
      <button onClick={() => { setIsNewSVGCookie(!isNewSVGCookie); }}>Flip</button>
      <p>
        {`cookie: ${name}: ${value}`}
      </p>
    </>
  )
}

export default App
