import { Entries } from "~/libs/contentful";
import { PostOutput } from "~/libs/presenters/PostOutput";
import { Err, Ok } from "~/types/result";

export const postClient = {
  findAll: async ({ limit, page }: { limit?: number; page?: number }) => {
    try {
      const searchParams = new URLSearchParams({
        limit: `${limit || 100}`,
        ...(page && limit && { skip: `${page * limit}` }),
      });
      const query = searchParams.toString();
      const res = await fetch(
        `${import.meta.env.PUBLIC_ENV__API_URL}/api/posts?${query}`,
      );
      const data: Entries = await res.json();
      return new Ok(
        data.items.map((item) => new PostOutput(item, data.includes?.Asset)),
      );
    } catch (e) {
      return new Err(e as Error);
    }
  },
};

export type PostClientFindAllOptions = Parameters<typeof postClient.findAll>[0];
