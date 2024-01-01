import {
  PostClientFindAllOptions,
  postClient,
} from "~/libs/repositories/postClient";

export async function getPostListClient(options: PostClientFindAllOptions) {
  const res = postClient.findAll(options || {});
  return res;
}
