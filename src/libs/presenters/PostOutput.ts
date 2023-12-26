import { Entries } from "~/libs/contentful";
import { parseMarkdown } from "~/libs/parser";
import { Post } from "~/libs/entities/Post";

export class PostOutput implements Post {
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
