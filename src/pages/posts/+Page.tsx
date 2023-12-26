import { usePageContext } from "~/hooks/usePageContext";
import { POST_LIST } from "~/libs/dictionary";

export function Page() {
  const context = usePageContext();
  return (
    <>
      <h1>{POST_LIST}</h1>
      <ul>
        {context?.data?.postList?.map((post) => (
          <li key={post.fields.slug}>
            <a href={`/posts/${post.fields.slug}`}>{post.fields.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
