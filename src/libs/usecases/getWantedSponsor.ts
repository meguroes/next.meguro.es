import { wantedSponsor } from "~/libs/repositories/wantedSponsor";

export const getWantedSponsor = async () => {
  const res = await wantedSponsor.findAll();
  return res;
};
