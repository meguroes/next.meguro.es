import { Breadcrumb } from "~/components/Breadcrumb";
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
        <p className="whitespace-pre text-14 font-light leading-180 tracking-2">
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
          className="mb-16 whitespace-pre text-14 font-regular leading-180 tracking-2"
          dangerouslySetInnerHTML={{ __html: ABOUT_SECTION_1_DESCRIPTION }}
        />
        <div className="flex">
          <img
            src="/image_meguroes1.png"
            alt=""
            height={360}
            width={632}
            className="mr-16 h-fit shrink-0 overflow-hidden rounded-24"
          />
          <img
            src="/image_meguroes2.png"
            alt=""
            height={360}
            width={632}
            className="shrink-0 overflow-hidden rounded-24"
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
    </main>
  );
}
