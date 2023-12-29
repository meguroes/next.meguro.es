import { ContactX } from "~/components/Contact";
import { SectionHeaderCaption } from "~/components/SectionHeaderCaption";
import {
  GUIDELINE_AGAINST_VIOLATION,
  GUIDELINE_AGAINST_VIOLATION_TITLE,
  GUIDELINE_DESCRIPTION,
  GUIDELINE_SLOGAN,
  GUIDELINE_SUB_DESCRIPTION,
  GUIDELINE_SUPPLEMENT,
  GUIDELINE_SUPPLEMENT_TITLE,
} from "~/libs/dictionary";

export default function Page() {
  return (
    <div className="space-y-64 md:space-y-120">
      <section className="space-y-48">
        <h2 className="text-32 font-bold">{GUIDELINE_DESCRIPTION}</h2>
        <div>
          {GUIDELINE_SUB_DESCRIPTION.map((desc, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: desc }} />
          ))}
        </div>
      </section>
      <section className="space-y-64">
        {GUIDELINE_SLOGAN.map((slogan) => (
          <div key={slogan.id} className="space-y-16">
            <div className="space-y-12 font-bold">
              <SectionHeaderCaption text={slogan.id} />
              <h2 className="text-20">{slogan.title}</h2>
            </div>
            {slogan.description.map((desc, index) => (
              <div key={index} dangerouslySetInnerHTML={{ __html: desc }} />
            ))}
          </div>
        ))}
      </section>
      <section className="space-y-48">
        <h2 className="text-32 font-bold">
          {GUIDELINE_AGAINST_VIOLATION_TITLE}
        </h2>
        <div className="space-y-48">
          {GUIDELINE_AGAINST_VIOLATION.map((againstViolation) => (
            <div key={againstViolation.id} className="space-y-16">
              <div className="space-y-12 font-bold">
                <SectionHeaderCaption text={againstViolation.id} />
                <h3 className="text-20">{againstViolation.title}</h3>
              </div>
              <div className="text-14">
                {againstViolation.description.map((desc, index) => (
                  <div key={index} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-48">
        <h2 className="text-32 font-bold">{GUIDELINE_SUPPLEMENT_TITLE}</h2>
        <div className="grid grid-cols-1 gap-64 md:grid-cols-3 md:gap-y-48">
          {GUIDELINE_SUPPLEMENT.map((supplement) => (
            <div key={supplement.id} className="space-y-16">
              <div className="space-y-12 font-bold">
                <SectionHeaderCaption text={supplement.id} />
                <h3 className="text-20">{supplement.title}</h3>
              </div>
              <div className="text-14">
                {supplement.description.map((desc, index) => (
                  <div key={index} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
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
