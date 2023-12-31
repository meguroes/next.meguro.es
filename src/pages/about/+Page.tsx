import { Breadcrumb } from "~/components/Breadcrumb";
import { ContactX } from "~/components/Contact";
import { SectionHeader } from "~/components/SectionHeader";
import { WantedSponsor } from "~/components/WantedSponsor";
import {
  ABOUT,
  ABOUT_DESCRIPTION,
  ABOUT_SECTION_1_DESCRIPTION,
  ABOUT_SECTION_1_HEADDING,
  ABOUT_SECTION_2_DESCRIPTION,
  ABOUT_SECTION_2_HEADDING,
} from "~/libs/dictionary";

export function Page() {
  return (
    <main class="grid grid-cols-1 gap-120">
      <div class="grid grid-cols-1 gap-48">
        <Breadcrumb
          items={[
            {
              to: "/about",
              label: "Meguro.esとは",
            },
          ]}
        />
        <h1 className="text-32 font-bold leading-100 tracking-2">{ABOUT}</h1>
        <p className="text-14 font-light leading-180 tracking-2">
          {ABOUT_DESCRIPTION}
        </p>
      </div>
      <div>
        <SectionHeader
          as="h2"
          caption="Concept"
          className="mb-16"
          label={ABOUT_SECTION_1_HEADDING}
          sizes="small"
        />
        <p
          className="mb-16 text-14 font-regular leading-180 tracking-2"
          dangerouslySetInnerHTML={{ __html: ABOUT_SECTION_1_DESCRIPTION }}
        />
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <img
            src="/image_meguroes1.png"
            alt=""
            height={360}
            width={632}
            className="h-full shrink-0 overflow-hidden rounded-24 object-cover"
          />
          <img
            src="/image_meguroes2.png"
            alt=""
            height={360}
            width={632}
            className="h-full shrink-0 overflow-hidden rounded-24 object-cover"
          />
        </div>
      </div>
      <div>
        <SectionHeader
          as="h2"
          caption="Concept"
          className="mb-16"
          label={ABOUT_SECTION_2_HEADDING}
          sizes="small"
        />
        <p
          className="mb-16 text-14 font-regular leading-180 tracking-2"
          dangerouslySetInnerHTML={{ __html: ABOUT_SECTION_2_DESCRIPTION }}
        />
      </div>
      <hr className="border-white" />
      <WantedSponsor />
      <section>
        <ContactX />
      </section>
    </main>
  );
}
