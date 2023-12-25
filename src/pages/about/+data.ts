import { PageContext } from "vike/types";
import { ABOUT_DESCRIPTION, ABOUT_TITLE } from "~/libs/dictionary";

export async function data(
  _pageContext: PageContext
): Promise<PageContext["data"]> {
  return {
    title: ABOUT_TITLE,
    description: ABOUT_DESCRIPTION,
  };
}
