import { about } from "~/libs/repositories/about";

/** @deprecated ~/libs/dictionary.ts 内の文言を使用してください。 */
export const getAbout = async () => {
  const res = await about.findAll();
  return res;
};
