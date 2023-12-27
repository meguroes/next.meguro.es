import { Entries } from "~/libs/contentful";
import { parseMarkdown } from "~/libs/parser";
import { Post } from "~/libs/entities/Post";

export class PostOutput implements Post {
  readonly fields: Post["fields"];
  constructor(
    { fields }: Entries["items"][number],
    assets: NonNullable<Entries["includes"]>["Asset"],
  ) {
    const heroImage =
      fields.heroImage &&
      assets?.find(
        (asset) =>
          asset.sys.id === (fields.heroImage as { sys: { id: string } }).sys.id,
      ).fields.file.url;
    this.fields = {
      title: String(fields.title || ""),
      description: String(fields.description || ""),
      slug: String(fields.slug || ""),
      body: parseMarkdown(String(fields.body) || ""),
      heroImageUrl: heroImage ? `https:${heroImage}` : null,
      createdAt: String(fields.createdAt || ""),
      updatedAt: String(fields.updatedAt || ""),
    };
  }
}
