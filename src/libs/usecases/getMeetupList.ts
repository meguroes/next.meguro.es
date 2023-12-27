import { MeetupFindAllOptions, meetup } from "~/libs/repositories/meetup";

export const getMeetupList = async (options?: MeetupFindAllOptions) => {
  const res = await meetup.findAll(options || {});
  return res;
};
