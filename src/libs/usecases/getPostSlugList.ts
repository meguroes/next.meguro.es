import { postRepository } from "~/libs/repositories/postRepository";
import { Err, Ok } from "~/types/result";

export const getPostSlugList = async () => {
  const data = await postRepository.findAll("slug");
  if (data.isOk()) {
    return new Ok(data.unwrap().map((item) => item.fields.slug));
  }
  return new Err(data.unwrap());
};
