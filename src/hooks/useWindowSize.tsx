import { useState, useEffect } from 'react';

/**
 * Returns the width and height of the window, reacting as the user resizes
 */
const useWindowSize = (): [number, number] => {
  const [windowSize, setWindowSize] = useState<[number, number]>([
    window.innerWidth,
    window.innerHeight,
  ]);
  useEffect(() => {
    const handleWindowResize = () =>
      setWindowSize([window.innerWidth, window.innerHeight]);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  return windowSize;
};
export default useWindowSize;
