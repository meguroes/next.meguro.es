import { marked } from "marked";

export const parseMarkdown = (markdown: string) => {
  /**
   * async: false にしても Promise を返すので string にキャストする
   * @see https://github.com/markedjs/marked/issues/3101#issuecomment-1821218472
   */
  return marked.parse(markdown, { async: false }) as string;
};
