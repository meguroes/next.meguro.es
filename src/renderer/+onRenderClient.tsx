// https://vike.dev/onRenderClient
export { onRenderClient };

import { Providers } from "~/components/Providers";
import { hydrate } from "preact";
import type { OnRenderClientAsync } from "vike/types";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from "~/libs/dictionary";

// This onRenderClient() hook only supports SSR, see https://vike.dev/render-modes for how to modify onRenderClient()
// to support SPA
const onRenderClient: OnRenderClientAsync = async (
  pageContext,
): ReturnType<OnRenderClientAsync> => {
  const { Page, pageProps } = pageContext;
  if (!Page)
    throw new Error(
      "Client-side render() hook expects pageContext.Page to be defined",
    );
  const root = document.getElementById("root");
  if (!root) throw new Error("DOM element #root not found");
  hydrate(
    <Providers pageContext={pageContext}>
      <Page {...pageProps} />
    </Providers>,
    root,
  );
  document.title = pageContext.data?.title || DEFAULT_TITLE;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute(
      "content",
      pageContext.data?.description || DEFAULT_DESCRIPTION,
    );
};
