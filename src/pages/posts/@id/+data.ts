import { render } from "vike/abort";
import { PageContext } from "vike/types";
import { getPost } from "~/libs/usecases/getPost";
import { getWantedSponsor } from "~/libs/usecases/getWantedSponsor";

export async function data(pageContext: PageContext) {
  const id = pageContext.routeParams?.id || "";
  const postRes = await getPost(id);
  const wantedSponsorRes = await getWantedSponsor();
  if (postRes.isOk() && wantedSponsorRes.isOk()) {
    const post = postRes.unwrap();
    const wantedSponsor = wantedSponsorRes.unwrap();
    return {
      title: post.fields.title,
      description: post.fields.description,
      ogImageUrl: post.fields.heroImageUrl || "/image_hero_fallback.png",
      post,
      wantedSponsor,
    };
  }
  throw render(503);
}
