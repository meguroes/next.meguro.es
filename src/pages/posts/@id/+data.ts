import { render } from "vike/abort";
import { PageContext } from "vike/types";
import { getPost } from "~/libs/usecases/getPost";

export async function data(pageContext: PageContext) {
  const id = pageContext.routeParams?.id || "";
  const res = await getPost(id);
  if (res.isOk()) {
    const data = res.unwrap();
    return {
      title: data.fields.title,
      description: data.fields.description,
      ogImageUrl: data.fields.heroImageUrl || "/image_hero_fallback.png",
      post: data,
    };
  }
  throw render(503);
}
