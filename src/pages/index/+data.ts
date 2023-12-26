import { render } from "vike/abort";
import { getMeetupList } from "~/libs/usecases/getMeetupList";
import { getPostList } from "~/libs/usecases/getPostList";

export async function data() {
  const meetupRes = await getMeetupList();
  const postListRes = await getPostList({ limit: 3 });
  if (meetupRes.isOk() && postListRes.isOk()) {
    const meetupList = meetupRes.unwrap();
    const postList = postListRes.unwrap();
    return {
      meetupList,
      postList,
    };
  }
  throw render(503);
}
