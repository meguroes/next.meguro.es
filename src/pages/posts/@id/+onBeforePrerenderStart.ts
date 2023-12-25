export async function onBeforePrerenderStart() {
  const slugs = ["about", "contact", "projects"];
  return slugs.map((slug) => `/posts/${slug}`);
}
