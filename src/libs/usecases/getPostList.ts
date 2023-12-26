import { postRepository } from "~/libs/repositories/postRepository";

export const getPostList = async () => {
  const postList = await postRepository.findAll();
  return postList;
};
