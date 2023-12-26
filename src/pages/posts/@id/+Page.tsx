import { usePageContext } from "~/hooks/usePageContext";

export default function Page() {
  const context = usePageContext();
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: context?.data?.post?.fields.body || "",
      }}
    />
  );
}
