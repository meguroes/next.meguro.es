import { render } from "vike/abort";
import { PageContext } from "vike/types";
import { getGuideline } from "~/libs/usecases/getGuideline";

export async function data(_pageContext: PageContext) {
  const res = await getGuideline();
  if (res.isOk()) {
    const data = res.unwrap();
    return {
      title: data.fields.og.title,
      description: data.fields.og.description,
      guideline: data,
    };
  }
  throw render(503);
}
