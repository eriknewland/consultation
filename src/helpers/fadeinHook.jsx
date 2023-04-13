import { useRef, useEffect } from 'react';

function useFadeIn(duration = 500, deps = []) {
  const fadeInRef = useRef(null);

  useEffect(() => {
    const element = fadeInRef.current;
    if (element) {
      element.style.opacity = 0;
      element.style.transition = `opacity ${duration}ms`;

      setTimeout(() => {
        element.style.opacity = 1;
      }, 50);
    }
  }, [duration, ...deps]);

  return fadeInRef;
}
export default useFadeIn;
