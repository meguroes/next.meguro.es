import { client } from "~/libs/contentful";
import { Err, Ok, Result } from "~/types/result";
import { Post } from "~/libs/entities/Post";
import { PostPresenter } from "../presenters/PostPresenter";

export const postRepository = {
  findAll: async (
    filter?: keyof Post["fields"],
  ): Promise<Result<Post[], Error>> => {
    try {
      const post = await client.getEntries({
        content_type: "post",
        order: ["-fields.createdAt"],
      });
      if (filter) {
        return new Ok(
          post.items
            .map((item) => new PostPresenter(item))
            .filter((item) => item.fields[filter]),
        );
      }
      return new Ok(post.items.map((item) => new PostPresenter(item)));
    } catch (e) {
      return new Err(e as Error);
    }
  },
  find: async (id: string): Promise<Result<Post, Error>> => {
    try {
      const post = await client.getEntries({
        content_type: "post",
        "fields.slug": id,
      });
      return new Ok(new PostPresenter(post.items[0]));
    } catch (e) {
      return new Err(e as Error);
    }
  },
} as const;
