import { useMemo } from "preact/hooks";
import { Breadcrumb } from "~/components/Breadcrumb";
import { ContactX } from "~/components/Contact";
import { SectionHeader } from "~/components/SectionHeader";
import { usePageContext } from "~/hooks/usePageContext";

type Section = {
  id: string;
  title: string;
  desc: string;
};

export default function Page() {
  const context = usePageContext();
  const guideline = context?.data?.guideline;
  const slogans: Section[] = useMemo(
    () => [
      {
        id: "01",
        title: guideline?.fields.sloganTitle01 || "",
        desc: guideline?.fields.slogan01 || "",
      },
      {
        id: "02",
        title: guideline?.fields.sloganTitle02 || "",
        desc: guideline?.fields.slogan02 || "",
      },
      {
        id: "03",
        title: guideline?.fields.sloganTitle03 || "",
        desc: guideline?.fields.slogan03 || "",
      },
    ],
    [guideline],
  );
  const againstViolations: Section[] = useMemo(
    () => [
      {
        id: "How we deal violations",
        title: guideline?.fields.howWeDealViolationsTitle || "",
        desc: guideline?.fields.howWeDealViolations || "",
      },
      {
        id: "Report",
        title: guideline?.fields.reportTitle || "",
        desc: guideline?.fields.report || "",
      },
    ],
    [guideline],
  );
  const supplements: Section[] = useMemo(
    () => [
      {
        id: "Harassment Prevention",
        title: guideline?.fields.harassmentPreventionTitle || "",
        desc: guideline?.fields.harassmentPrevention || "",
      },
      {
        id: "About Invitation",
        title: guideline?.fields.aboutInvitationTitle || "",
        desc: guideline?.fields.aboutInvitation || "",
      },
      {
        id: "About Sponsors",
        title: guideline?.fields.aboutSponsorsTitle || "",
        desc: guideline?.fields.aboutSponsors || "",
      },
    ],
    [guideline],
  );

  return (
    <div className="guideline space-y-64 px-20 md:space-y-120 md:p-80">
      <section className="space-y-48">
        <Breadcrumb
          items={[
            {
              to: "/guideline",
              label: "ガイドライン",
            },
          ]}
        />
        <h1 className="text-32 font-bold leading-140 tracking-2">
          {guideline?.fields.title}
        </h1>
        <div
          className="text-14 font-light leading-180 tracking-2"
          dangerouslySetInnerHTML={{ __html: guideline?.fields.summary || "" }}
        />
      </section>
      <section className="space-y-64">
        {slogans.map((slogan) => (
          <div key={slogan.id}>
            <SectionHeader
              as="h3"
              className="mb-16"
              caption={slogan.id}
              label={slogan.title}
              sizes="small"
            />
            <div
              className="text-14 font-light leading-180 tracking-2"
              dangerouslySetInnerHTML={{ __html: slogan.desc }}
            />
          </div>
        ))}
      </section>
      <section className="space-y-48">
        <h2 className="text-32 font-bold leading-140 tracking-2">
          {guideline?.fields.againstViolationsTitle}
        </h2>
        <div className="space-y-48">
          {againstViolations.map((againstViolation) => (
            <div key={againstViolation.id} className="space-y-16">
              <SectionHeader
                as="h3"
                className="mb-16"
                caption={againstViolation.id}
                label={againstViolation.title}
                sizes="small"
              />
              <div
                className="text-14 font-light leading-180 tracking-2"
                dangerouslySetInnerHTML={{ __html: againstViolation.desc }}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-48">
        <h2 className="text-32 font-bold leading-140 tracking-2">
          {guideline?.fields.supplementTitle}
        </h2>
        <div className="grid grid-cols-1 gap-64 md:grid-cols-2 lg:grid-cols-3">
          {supplements.map((supplement) => (
            <div key={supplement.id} className="space-y-16">
              <SectionHeader
                as="h3"
                className="mb-16"
                caption={supplement.id}
                label={supplement.title}
                sizes="small"
              />
              <div
                className="text-14 font-light leading-180 tracking-2"
                dangerouslySetInnerHTML={{ __html: supplement.desc }}
              />
            </div>
          ))}
        </div>
      </section>
      <section>
        <ContactX />
      </section>
    </div>
  );
}
