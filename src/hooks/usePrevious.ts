/** https://github.com/streamich/react-use/blob/e27c1930da8b94a2c570954786aa68a3dc5624be/src/usePrevious.ts */

import { useEffect, useRef } from "preact/hooks";

export default function usePrevious<T>(state: T): T | undefined {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = state;
  });

  return ref.current;
}
