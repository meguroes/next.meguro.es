// https://vike.dev/pageContext-anywhere
import { useContext } from "preact/hooks";
import { createContext, ComponentChildren } from "preact";
import type { PageContext } from "vike/types";

export { PageContextProvider };

const Context = createContext<PageContext | null>(null);

function PageContextProvider({
  pageContext,
  children,
}: {
  pageContext: PageContext;
  children: ComponentChildren;
}) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
}

export function usePageContext() {
  const pageContext = useContext(Context);
  return pageContext;
}
