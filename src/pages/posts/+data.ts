import { render } from "vike/abort";
import { POST_LIST } from "~/libs/dictionary";
import { getPostList } from "~/libs/usecases/getPostList";

export async function data() {
  const res = await getPostList();
  if (res.isOk()) {
    const data = res.unwrap();
    return {
      title: POST_LIST,
      postList: data,
    };
  }
  throw render(503);
}
