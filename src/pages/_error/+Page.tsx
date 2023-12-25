// https://vike.dev/error-page
import { useMemo } from "preact/hooks";
import { usePageContext } from "~/hooks/usePageContext";
import {
  ERROR_PAGE_NOT_FOUND,
  ERROR_SOMETHING_WENT_WRONG,
} from "~/libs/dictionary";

export default function Page() {
  const context = usePageContext();
  const reason = useMemo(() => {
    if (context?.abortReason) return context.abortReason;
    if (context?.is404) {
      return ERROR_PAGE_NOT_FOUND;
    }
    return ERROR_SOMETHING_WENT_WRONG;
  }, [context]);

  return (
    <>
      <h1>{reason}</h1>
      {context?.abortStatusCode && <div>Status: {context.abortStatusCode}</div>}
    </>
  );
}
