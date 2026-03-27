import { useEffect } from 'react';


function UpdateFavicon() {
  useEffect(() => {
    const favicon = document.getElementById('favicon') as HTMLLinkElement;
    if (favicon) {
      favicon.href = `${import.meta.env.BASE_URL}favicon.png`;
    }
  }, []);

  return null;
}

export default UpdateFavicon