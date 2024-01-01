import { client } from "~/libs/contentful";
import { Err, Ok, Result } from "~/types/result";
import { WantedSponsorOutput } from "~/libs/presenters/WantedSponsorOutput";
import { WantedSponsor } from "~/libs/entities/WantedSponsor";

export const wantedSponsor = {
  findAll: async (): Promise<Result<WantedSponsor, Error>> => {
    try {
      const wantedSponsor = await client.getEntries({
        content_type: "wanted_sponsors",
        limit: 1,
      });
      return new Ok(new WantedSponsorOutput(wantedSponsor.items[0]));
    } catch (e) {
      return new Err(e as Error);
    }
  },
} as const;
