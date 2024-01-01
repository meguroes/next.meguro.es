import { client } from "~/libs/contentful";
import { Err, Ok, Result } from "~/types/result";
import { AboutOutput } from "~/libs/presenters/AboutOutput";
import { About } from "~/libs/entities/About";

export const about = {
  findAll: async (): Promise<Result<About, Error>> => {
    try {
      const about = await client.getEntries({
        content_type: "about",
        limit: 1,
      });
      return new Ok(new AboutOutput(about.items[0]));
    } catch (e) {
      return new Err(e as Error);
    }
  },
} as const;
