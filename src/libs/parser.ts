import { marked } from "marked";
import { Brand } from "~/types/brand";

export const parseMarkdown = (markdown: string) => {
  /**
   * async: false にしても Promise を返すので string にキャストする
   * @see https://github.com/markedjs/marked/issues/3101#issuecomment-1821218472
   */
  return marked.parse(markdown, { async: false }) as string;
};

export type StringWithoutHtml = Brand<string, "htmllessStringBrand">;
const htmlRegExp = /<\/?[^>]+(>|$)/g;
function isStringWithoutHtml(str: string): str is StringWithoutHtml {
  return !str.match(htmlRegExp);
}
export function getStringWithoutHtml(str: string) {
  const parsed = str.replace(htmlRegExp, "");
  return isStringWithoutHtml(parsed) ? parsed : ("" as StringWithoutHtml);
}
