import { postRepository } from "~/libs/repositories/postRepository";

export const getPost = async (id: string) => {
  const post = await postRepository.find(id);
  return post;
};
