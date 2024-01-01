import { StringWithoutHtml } from "~/libs/parser";

export interface Guideline {
  fields: {
    title: string;
    summary: string;
    sloganTitle01: string;
    slogan01: string;
    sloganTitle02: string;
    slogan02: string;
    sloganTitle03: string;
    slogan03: string;
    againstViolationsTitle: string;
    howWeDealViolationsTitle: string;
    howWeDealViolations: string;
    reportTitle: string;
    report: string;
    supplementTitle: string;
    harassmentPreventionTitle: string;
    harassmentPrevention: string;
    aboutInvitationTitle: string;
    aboutInvitation: string;
    aboutSponsorsTitle: string;
    aboutSponsors: string;
    createdAt: string;
    updatedAt: string;
    og: {
      title: string;
      description: StringWithoutHtml;
    };
  };
}
