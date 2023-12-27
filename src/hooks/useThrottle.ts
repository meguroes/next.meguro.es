import { useEffect, useRef } from "preact/hooks";
import { throttle } from "throttle-debounce";

export const useThrottle = (cb: () => void, ms: number) => {
  const handler = useRef(throttle(ms, cb)).current;

  useEffect(() => {
    return () => {
      handler.cancel();
    };
  }, [handler]);

  return handler;
};
