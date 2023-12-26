import { client } from "~/libs/contentful";
import { Err, Ok, Result } from "~/types/result";
import { GuidelineOutput } from "~/libs/presenters/GuidelineOutput";
import { Guideline } from "~/libs/entities/Guideline";

export const guideline = {
  findAll: async (): Promise<Result<Guideline, Error>> => {
    try {
      const guideline = await client.getEntries({
        content_type: "article",
        "fields.name": "guideline",
        limit: 1,
      });
      return new Ok(new GuidelineOutput(guideline.items[0]));
    } catch (e) {
      return new Err(e as Error);
    }
  },
} as const;
