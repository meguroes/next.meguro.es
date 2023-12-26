import { Post } from "~/libs/entities/Post";
import { Entries } from "~/libs//contentful";
import { parseMarkdown } from "~/libs/parser";

export class PostPresenter implements Post {
  readonly fields: Post["fields"];
  constructor({ fields }: Entries["items"][number]) {
    this.fields = {
      title: String(fields.title || ""),
      description: String(fields.description || ""),
      slug: String(fields.slug || ""),
      body: parseMarkdown(String(fields.body) || ""),
      createdAt: String(fields.createdAt || ""),
      updatedAt: String(fields.updatedAt || ""),
    };
  }
}
