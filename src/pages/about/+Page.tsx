import { Breadcrumb } from "~/components/Breadcrumb";
import { ContactX } from "~/components/Contact";
import { SectionHeader } from "~/components/SectionHeader";
import { WantedSponsor } from "~/components/WantedSponsor";
import { usePageContext } from "~/hooks/usePageContext";

export function Page() {
  const context = usePageContext();
  const about = context?.data?.about;
  const wantedSponsor = context?.data?.wantedSponsor;
  return (
    <main class="about grid grid-cols-1 gap-120 px-20 md:p-80">
      <div class="grid grid-cols-1 gap-48">
        <Breadcrumb
          items={[
            {
              to: "/about",
              label: "Meguro.esとは",
            },
          ]}
        />
        <h1 className="text-32 font-bold leading-100 tracking-2">
          {about?.fields.title}
        </h1>
        <div
          className="text-14 font-light leading-180 tracking-2"
          dangerouslySetInnerHTML={{ __html: about?.fields.summary || "" }}
        />
      </div>
      <div>
        <SectionHeader
          as="h2"
          caption="Concept"
          className="mb-16"
          label={about?.fields.conceptTitle || ""}
          sizes="small"
        />
        <div
          className="mb-16 text-14 font-regular leading-180 tracking-2"
          dangerouslySetInnerHTML={{ __html: about?.fields.concept || "" }}
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
          caption="History"
          className="mb-16"
          label={about?.fields.historyTitle || ""}
          sizes="small"
        />
        <div
          className="mb-16 text-14 font-regular leading-180 tracking-2"
          dangerouslySetInnerHTML={{ __html: about?.fields.history || "" }}
        />
      </div>
      <hr className="border-white" />
      {wantedSponsor?.fields && <WantedSponsor {...wantedSponsor.fields} />}
      <section>
        <ContactX />
      </section>
    </main>
  );
}
