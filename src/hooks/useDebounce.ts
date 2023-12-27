import { useEffect, useRef } from "preact/hooks";
import { debounce } from "throttle-debounce";

export const useDebounce = (cb: () => void, ms: number) => {
  const handler = useRef(debounce(ms, cb)).current;

  useEffect(() => {
    return () => {
      handler.cancel();
    };
  }, [handler]);

  return handler;
};
