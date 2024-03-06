export function findCookie(cookieName, cookieValue) {
    const cookies = document.cookie.split(';');
  
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
  
      if (name === cookieName && (value === undefined || value === cookieValue)) {
        return { name, value };
      }
    }
  
    return null; // Cookie not found
}