import { ContactX } from "~/components/Contact";
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
    <>
      <section>
        <h2>{GUIDELINE_DESCRIPTION}</h2>
        <div>
          {GUIDELINE_SUB_DESCRIPTION.map((desc, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: desc }} />
          ))}
        </div>
      </section>
      <section>
        {GUIDELINE_SLOGAN.map((slogan) => (
          <div key={slogan.id}>
            <div>
              <div>{slogan.id}</div>
              <h2>{slogan.title}</h2>
            </div>
            {slogan.description.map((desc, index) => (
              <div key={index} dangerouslySetInnerHTML={{ __html: desc }} />
            ))}
          </div>
        ))}
      </section>
      <section>
        <h2>{GUIDELINE_AGAINST_VIOLATION_TITLE}</h2>
        <div>
          {GUIDELINE_AGAINST_VIOLATION.map((againstViolation) => (
            <div key={againstViolation.id}>
              <div>
                <div>{againstViolation.id}</div>
                <h3>{againstViolation.title}</h3>
              </div>
              {againstViolation.description.map((desc, index) => (
                <div key={index} dangerouslySetInnerHTML={{ __html: desc }} />
              ))}
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2>{GUIDELINE_SUPPLEMENT_TITLE}</h2>
        <div>
          {GUIDELINE_SUPPLEMENT.map((supplement) => (
            <div key={supplement.id}>
              <div>
                <div>{supplement.id}</div>
                <h3>{supplement.title}</h3>
              </div>
              {supplement.description.map((desc, index) => (
                <div key={index} dangerouslySetInnerHTML={{ __html: desc }} />
              ))}
            </div>
          ))}
        </div>
      </section>
      <section>
        <ContactX />
      </section>
    </>
  );
}
