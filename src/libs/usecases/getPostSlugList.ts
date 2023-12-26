import { post } from "~/libs/repositories/post";
import { Err, Ok } from "~/types/result";

export const getPostSlugList = async () => {
  const res = await post.findAll({ filter: "slug" });
  if (res.isOk()) {
    return new Ok(res.unwrap().map((item) => item.fields.slug));
  }
  return new Err(res.unwrap());
};
