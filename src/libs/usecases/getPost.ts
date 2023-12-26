import { post } from "~/libs/repositories/post";

export const getPost = async (id: string) => {
  const res = await post.find(id);
  return res;
};
