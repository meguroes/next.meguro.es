import { Breadcrumb } from "~/components/Breadcrumb";
import { WantedSponsor } from "~/components/WantedSponsor";
import { usePageContext } from "~/hooks/usePageContext";

export default function Page() {
  const context = usePageContext();
  const wantedSponsor = context?.data?.wantedSponsor;
  return (
    <div className="space-y-120">
      <section className="space-y-48">
        <Breadcrumb
          items={[
            {
              to: `/posts/${context?.routeParams?.id || ""}`,
              label: context?.data?.post?.fields.title || "",
            },
          ]}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: context?.data?.post?.fields.body || "",
          }}
          className="post border-b border-white pb-120"
        />
      </section>
      {wantedSponsor?.fields && <WantedSponsor {...wantedSponsor.fields} />}
    </div>
  );
}
