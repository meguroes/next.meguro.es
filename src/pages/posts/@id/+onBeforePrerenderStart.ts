import { getPostSlugList } from "~/libs/usecases/getPostSlugList";

export async function onBeforePrerenderStart() {
  const res = await getPostSlugList();
  if (res.isOk()) {
    const data = res.unwrap();
    return data.map((slug) => `/posts/${slug}`);
  }
}
