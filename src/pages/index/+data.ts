import { render } from "vike/abort";
import { getMeetupList } from "~/libs/usecases/getMeetupList";

const MEETUP_LIMIT = 4;

export async function data() {
  const meetupRes = await getMeetupList({ limit: MEETUP_LIMIT });
  const recentMeetupRes = await getMeetupList({ limit: 1 });
  if (meetupRes.isOk() && recentMeetupRes.isOk()) {
    const meetupList = meetupRes.unwrap();
    return {
      meetupList,
      recentMeetup: recentMeetupRes.unwrap()[0],
    };
  }
  throw render(503);
}
