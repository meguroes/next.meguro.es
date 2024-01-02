import { useMemo } from "preact/hooks";
import { Breadcrumb } from "~/components/Breadcrumb";
import { ContactX } from "~/components/Contact";
import { SectionHeaderCaption } from "~/components/SectionHeaderCaption";
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
        <h2 className="text-32 font-bold">{guideline?.fields.title}</h2>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: guideline?.fields.summary || "",
            }}
          />
        </div>
      </section>
      <section className="space-y-64">
        {slogans.map((slogan) => (
          <div key={slogan.id} className="space-y-16">
            <div className="space-y-12 font-bold">
              <SectionHeaderCaption text={slogan.id} />
              <h2 className="text-20">{slogan.title}</h2>
            </div>
            <div dangerouslySetInnerHTML={{ __html: slogan.desc }} />
          </div>
        ))}
      </section>
      <section className="space-y-48">
        <h2 className="text-32 font-bold">
          {guideline?.fields.againstViolationsTitle}
        </h2>
        <div className="space-y-48">
          {againstViolations.map((againstViolation) => (
            <div key={againstViolation.id} className="space-y-16">
              <div className="space-y-12 font-bold">
                <SectionHeaderCaption text={againstViolation.id} />
                <h3 className="text-20">{againstViolation.title}</h3>
              </div>
              <div className="text-14">
                <div
                  dangerouslySetInnerHTML={{ __html: againstViolation.desc }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-48">
        <h2 className="text-32 font-bold">
          {guideline?.fields.supplementTitle}
        </h2>
        <div className="grid grid-cols-1 gap-64 md:grid-cols-3 md:gap-y-48">
          {supplements.map((supplement) => (
            <div key={supplement.id} className="space-y-16">
              <div className="space-y-12 font-bold">
                <SectionHeaderCaption text={supplement.id} />
                <h3 className="text-20">{supplement.title}</h3>
              </div>
              <div className="text-14">
                <div dangerouslySetInnerHTML={{ __html: supplement.desc }} />
              </div>
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
