import { ComponentChildren } from "preact";
import { PageContextProvider } from "~/hooks/usePageContext";
import type { PageContext } from "vike/types";
import { RootLayout } from "~/components/RootLayout";

export const Providers = ({
  children,
  pageContext,
}: {
  children: ComponentChildren;
  pageContext: PageContext;
}) => {
  return (
    <PageContextProvider pageContext={pageContext}>
      <RootLayout>{children}</RootLayout>
    </PageContextProvider>
  );
};
