/*
  This hook is used to check if the screen size matches the given media query.
  It returns a boolean value that indicates whether the screen size matches the given media query.
  The hook uses the window.matchMedia() method to check the media query.
*/

import { useState, useEffect } from "react";

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    media.addEventListener("change", listener);

    return () => {
      media.removeEventListener("change", listener);
    };
  }, [matches, query]);

  return matches;
};
