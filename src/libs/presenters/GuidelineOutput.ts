import { Entries } from "~/libs/contentful";
import { parseStringWithoutHtml, parseMarkdown } from "~/libs/parser";
import { Guideline } from "~/libs/entities/Guideline";

export class GuidelineOutput implements Guideline {
  readonly fields: Guideline["fields"];
  constructor({ fields }: Entries["items"][number]) {
    this.fields = {
      title: String(fields.title || ""),
      summary: parseMarkdown(String(fields.summary || "")),
      sloganTitle01: String(fields.slogan_title_01 || ""),
      slogan01: parseMarkdown(String(fields.slogan_01 || "")),
      sloganTitle02: String(fields.slogan_title_02 || ""),
      slogan02: parseMarkdown(String(fields.slogan_02 || "")),
      sloganTitle03: String(fields.slogan_title_03 || ""),
      slogan03: parseMarkdown(String(fields.slogan_03 || "")),
      againstViolationsTitle: String(fields.against_violations_title || ""),
      howWeDealViolationsTitle: String(
        fields.how_we_deal_violations_title || "",
      ),
      howWeDealViolations: parseMarkdown(
        String(fields.how_we_deal_violations || ""),
      ),
      reportTitle: String(fields.report_title || ""),
      report: parseMarkdown(String(fields.report || "")),
      supplementTitle: String(fields.supplement_title || ""),
      harassmentPreventionTitle: String(
        fields.harassment_prevention_title || "",
      ),
      harassmentPrevention: parseMarkdown(
        String(fields.harassment_prevention || ""),
      ),
      aboutInvitationTitle: String(fields.about_invitation_title || ""),
      aboutInvitation: parseMarkdown(String(fields.about_invitation || "")),
      aboutSponsorsTitle: String(fields.about_sponsors_title || ""),
      aboutSponsors: parseMarkdown(String(fields.about_sponsors || "")),
      og: {
        title: String(fields.title || ""),
        description: parseStringWithoutHtml(
          String(fields.summary || "").replace(/\n/g, ""),
        ),
      },
      createdAt: String(fields.createdAt || ""),
      updatedAt: String(fields.updatedAt || ""),
    };
  }
}
