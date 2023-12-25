import { PageContext } from "vike/types";

export async function data(_pageContext: PageContext) {
  return {
    title: "",
    description: "",
    ogImageUrl: "",
  };
}
