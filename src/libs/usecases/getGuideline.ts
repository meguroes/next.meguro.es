import { guideline } from "~/libs/repositories/guideline";

export const getGuideline = async () => {
  const res = await guideline.findAll();
  return res;
};
