import { post } from "~/libs/repositories/post";

export const getPostList = async () => {
  const res = await post.findAll();
  return res;
};
