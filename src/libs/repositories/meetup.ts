import { client } from "~/libs/contentful";
import { Err, Ok, Result } from "~/types/result";
import { Meetup } from "~/libs/entities/Meetup";
import { MeetupOutput } from "~/libs/presenters/MeetupOutput";

export const meetup = {
  findAll: async (
    filter?: keyof Meetup["fields"],
  ): Promise<Result<Meetup[], Error>> => {
    try {
      const meetup = await client.getEntries({
        content_type: "meetup",
        order: ["-fields.date"],
      });
      if (filter) {
        return new Ok(
          meetup.items
            .map((item) => new MeetupOutput(item))
            .filter((item) => item.fields[filter]),
        );
      }
      return new Ok(meetup.items.map((item) => new MeetupOutput(item)));
    } catch (e) {
      return new Err(e as Error);
    }
  },
} as const;
