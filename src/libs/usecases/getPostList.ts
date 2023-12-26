import { PostFindAllOptions, post } from "~/libs/repositories/post";

export const getPostList = async (options?: PostFindAllOptions) => {
  const res = await post.findAll(options || {});
  return res;
};
