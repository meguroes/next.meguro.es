import { meetup } from "~/libs/repositories/meetup";

export const getMeetupList = async () => {
  const res = await meetup.findAll();
  return res;
};
