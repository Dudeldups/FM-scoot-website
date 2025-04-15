import { useEffect, useRef } from "react";
import { useRefStore } from "../stores/refStore";

export function useStoreRef(key: string) {
  const ref = useRef<HTMLElement>(null);
  const setRef = useRefStore(state => state.setRef);

  useEffect(() => {
    if (ref.current) {
      setRef(key, ref);
    }
  }, [key, setRef]);

  return ref;
}
