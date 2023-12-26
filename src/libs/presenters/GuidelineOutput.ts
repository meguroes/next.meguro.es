import { Entries } from "~/libs/contentful";
import { parseMarkdown } from "~/libs/parser";
import { Guideline } from "~/libs/entities/Guideline";

export class GuidelineOutput implements Guideline {
  readonly fields: Guideline["fields"];
  constructor({ fields }: Entries["items"][number]) {
    this.fields = {
      body: parseMarkdown(String(fields.body) || ""),
      createdAt: String(fields.createdAt || ""),
      updatedAt: String(fields.updatedAt || ""),
    };
  }
}
