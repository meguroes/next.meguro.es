import { Entries } from "~/libs/contentful";
import { WantedSponsor } from "~/libs/entities/WantedSponsor";
import { parseMarkdown } from "../parser";

export class WantedSponsorOutput implements WantedSponsor {
  readonly fields: WantedSponsor["fields"];
  constructor({ fields }: Entries["items"][number]) {
    this.fields = {
      title: String(fields.title || ""),
      summary: parseMarkdown(String(fields.summary || "")),
      rewardsTitle: String(fields.rewards_title || ""),
      rewardsTitle01: String(fields.rewards_title_01 || ""),
      rewards01: parseMarkdown(String(fields.rewards_01 || "")),
      rewardsTitle02: String(fields.rewards_title_02 || ""),
      rewards02: parseMarkdown(String(fields.rewards_02 || "")),
      rewardsTitle03: String(fields.rewards_title_03 || ""),
      rewards03: parseMarkdown(String(fields.rewards_03 || "")),
      createdAt: String(fields.createdAt || ""),
      updatedAt: String(fields.updatedAt || ""),
    };
  }
}
