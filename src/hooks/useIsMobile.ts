import { useState, useEffect } from 'react';

const getWindowRect = ()=>{
  return {
    width: Math.max(window.document.documentElement.clientWidth, window.innerWidth || 0),
    height: Math.max(window.document.documentElement.clientHeight, window.innerHeight || 0),
  };
}

const getIsMobile = () => {
  const currentWindowWidth = getWindowRect().width;
  return currentWindowWidth < 980;
};

function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    const onResize = () => setIsMobile(getIsMobile());
    window.addEventListener('resize', onResize);

    onResize();

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return isMobile;
}

export default useIsMobile;
