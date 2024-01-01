import { Entries } from "~/libs/contentful";
import { getStringWithoutHtml, parseMarkdown } from "~/libs/parser";
import { About } from "~/libs/entities/About";

export class AboutOutput implements About {
  readonly fields: About["fields"];
  constructor({ fields }: Entries["items"][number]) {
    this.fields = {
      title: String(fields.title || ""),
      summary: parseMarkdown(String(fields.summary || "")),
      conceptTitle: String(fields.concept_title || ""),
      concept: parseMarkdown(String(fields.concept || "")),
      historyTitle: String(fields.history_title || ""),
      history: parseMarkdown(String(fields.history || "")),
      og: {
        title: String(fields.title || ""),
        description: getStringWithoutHtml(
          String(fields.summary || "").replace(/\n/g, ""),
        ),
      },
      createdAt: String(fields.createdAt || ""),
      updatedAt: String(fields.updatedAt || ""),
    };
  }
}
