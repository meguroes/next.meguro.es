import { Entries } from "~/libs/contentful";
import { parseMarkdown } from "~/libs/parser";
import { About } from "~/libs/entities/About";

export class AboutOutput implements About {
  readonly fields: About["fields"];
  constructor({ fields }: Entries["items"][number]) {
    this.fields = {
      body: parseMarkdown(String(fields.body) || ""),
      createdAt: String(fields.createdAt || ""),
      updatedAt: String(fields.updatedAt || ""),
    };
  }
}
