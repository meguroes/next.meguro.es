import contentful from "contentful";

class Contentful {
  #client: contentful.ContentfulClientApi<undefined>;

  constructor() {
    this.#client = contentful.createClient({
      space: import.meta.env.CONTENTFUL_SPACE_ID,
      accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN,
    });
  }

  get client() {
    return this.#client;
  }
}

const instance = new Contentful();
export const client = instance.client;

export type Entries = Awaited<ReturnType<typeof client.getEntries>>;
