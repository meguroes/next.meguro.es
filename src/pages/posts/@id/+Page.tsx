import { WantedSponsor } from "~/components/WantedSponsor";
import { usePageContext } from "~/hooks/usePageContext";

export default function Page() {
  const context = usePageContext();
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: context?.data?.post?.fields.body || "",
        }}
        className="post mb-120 border-b border-white pb-120"
      />
      <WantedSponsor />
    </>
  );
}
