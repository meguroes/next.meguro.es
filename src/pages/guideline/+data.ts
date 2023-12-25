import { PageContext } from "vike/types";
import { GUIDELINE_DESCRIPTION, GUIDELINE_TITLE } from "~/libs/dictionary";

export async function data(_pageContext: PageContext) {
  return {
    title: GUIDELINE_TITLE,
    description: GUIDELINE_DESCRIPTION,
  };
}
