import contentful from "contentful";
/* eslint no-duplicate-imports: "off" */
import * as all from "contentful";

/** @see https://github.com/contentful/contentful.js/issues/917#issuecomment-1851088525 */
const createClient = contentful ? contentful.createClient : all.createClient;

class Contentful {
  #client: contentful.ContentfulClientApi<undefined>;

  constructor() {
    this.#client = createClient({
      space: import.meta.env.PUBLIC_ENV__CONTENTFUL_SPACE_ID,
      accessToken: import.meta.env.PUBLIC_ENV__CONTENTFUL_ACCESS_TOKEN,
    });
  }

  get client() {
    return this.#client;
  }
}

const instance = new Contentful();
export const client = instance.client;

export type Entries = Awaited<ReturnType<typeof client.getEntries>>;
