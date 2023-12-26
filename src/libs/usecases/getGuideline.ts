import { guideline } from "~/libs/repositories/guideline";

/** @deprecated ~/libs/dictionary.ts 内の文言を使用してください。 */
export const getGuideline = async () => {
  const res = await guideline.findAll();
  return res;
};
