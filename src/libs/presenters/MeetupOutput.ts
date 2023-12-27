import { Entries } from "~/libs/contentful";
import { Meetup } from "~/libs/entities/Meetup";

export class MeetupOutput implements Meetup {
  readonly fields: Meetup["fields"];
  constructor({ fields }: Entries["items"][number]) {
    const location = (fields.location || { lon: "", lat: "" }) as {
      lon: string;
      lat: string;
    };
    this.fields = {
      id: String(fields.id || ""),
      title: String(fields.title || ""),
      date: String(fields.date || ""),
      locationName: String(fields.locationName || ""),
      locationUrl: `https://www.google.com/maps/search/?api=1&query=${location.lat}%2C${location.lon}`,
      connpassUrl: String(fields.eventUrl || ""),
    };
  }
}
