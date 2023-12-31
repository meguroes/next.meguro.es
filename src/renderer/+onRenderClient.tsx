// https://vike.dev/onRenderClient
export { onRenderClient };

import { Providers } from "~/components/Providers";
import { hydrate } from "preact";
import type { OnRenderClientAsync } from "vike/types";
import {
  CONSOLE_ASCII_ART_LOGO,
  CONSOLE_WANTED_DESCRIPTION,
  CONSOLE_WANTED_TITLE,
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
} from "~/libs/dictionary";

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
  const textGradientPrimaryStyle =
    "background: linear-gradient(to bottom, #fbb0d9 0%, #a56bc6 100%); color: transparent; -webkit-background-clip: text; background-clip: text;";
  const wantedTitleStyle = `font-family: Noto Sans JP, sans-serif; font-size: 32px; font-weight: bold; ${textGradientPrimaryStyle}`;
  const wantedDescriptionStyle = `font-family: Noto Sans JP, sans-serif; font-size: 14px;`;
  /* eslint no-console: "off" */
  console.log(
    `%c${CONSOLE_ASCII_ART_LOGO}

%c${CONSOLE_WANTED_TITLE}
%c${CONSOLE_WANTED_DESCRIPTION}
`,
    textGradientPrimaryStyle,
    wantedTitleStyle,
    wantedDescriptionStyle,
  );
};
