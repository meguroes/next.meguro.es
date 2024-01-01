import { about } from "~/libs/repositories/about";

export const getAbout = async () => {
  const res = await about.findAll();
  return res;
};
