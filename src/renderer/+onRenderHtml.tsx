// https://vike.dev/onRenderHtml
export { onRenderHtml };

import { renderToString } from "preact-render-to-string";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
import type { OnRenderHtmlAsync } from "vike/types";
import { Providers } from "~/components/Providers";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  WEBSITE_URL,
} from "~/libs/dictionary";

const onRenderHtml: OnRenderHtmlAsync = async (
  pageContext,
): ReturnType<OnRenderHtmlAsync> => {
  const { Page, pageProps } = pageContext;
  // This onRenderHtml() hook only supports SSR, see https://vike.dev/render-modes for how to modify
  // onRenderHtml() to support SPA
  if (!Page)
    throw new Error("My render() hook expects pageContext.Page to be defined");
  const pageHtml = renderToString(
    <Providers pageContext={pageContext}>
      <Page {...pageProps} />
    </Providers>,
  );

  const title = pageContext.data?.title || DEFAULT_TITLE;
  const desc = pageContext.data?.description || DEFAULT_DESCRIPTION;
  const ogImageUrl =
    pageContext.data?.ogImageUrl || `${WEBSITE_URL}/image_og.png`;
  const robotsContent = pageContext.data?.isPrivate ? "none" : "index,follow";

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Noto+Sans+JP:wght@300;600;800&display=swap" rel="stylesheet">
        <meta property="og:type" content="website" />
        <meta property="og:url" content="${WEBSITE_URL}" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:site_name" content="${DEFAULT_TITLE}" />
        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="${desc}" />
        <meta property="og:image" content="${ogImageUrl}" />
        <meta property="og:image:secure_url" content="${ogImageUrl}" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="robots" content="${robotsContent}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <meta name="format-detection" content="telephone=no,date=no,address=no,email=no">
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="${title}" />
        <meta name="twitter:description" content="${desc}" />
        <meta name="twitter:image" content="${ogImageUrl}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vike.dev/page-redirection
    },
  };
};
