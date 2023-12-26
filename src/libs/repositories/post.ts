import { client } from "~/libs/contentful";
import { Err, Ok, Result } from "~/types/result";
import { Post } from "~/libs/entities/Post";
import { PostOutput } from "~/libs/presenters/PostOutput";

export const post = {
  findAll: async ({
    filter,
    limit,
  }: {
    filter?: keyof Post["fields"];
    limit?: number;
  }): Promise<Result<Post[], Error>> => {
    try {
      const post = await client.getEntries({
        content_type: "post",
        order: ["-fields.createdAt"],
        limit,
      });
      if (filter) {
        return new Ok(
          post.items
            .map((item) => new PostOutput(item))
            .filter((item) => item.fields[filter]),
        );
      }
      return new Ok(post.items.map((item) => new PostOutput(item)));
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
      return new Ok(new PostOutput(post.items[0]));
    } catch (e) {
      return new Err(e as Error);
    }
  },
} as const;

export type PostFindAllOptions = Parameters<typeof post.findAll>[0];
