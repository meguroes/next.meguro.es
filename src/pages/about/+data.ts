import { render } from "vike/abort";
import { PageContext } from "vike/types";
import { getAbout } from "~/libs/usecases/getAbout";
import { getWantedSponsor } from "~/libs/usecases/getWantedSponsor";

export async function data(_pageContext: PageContext) {
  const aboutRes = await getAbout();
  const wantedSponsorRes = await getWantedSponsor();
  if (aboutRes.isOk() && wantedSponsorRes.isOk()) {
    const about = aboutRes.unwrap();
    const wantedSponsor = wantedSponsorRes.unwrap();
    return {
      title: about.fields.og.title,
      description: about.fields.og.description,
      about,
      wantedSponsor,
    };
  }
  throw render(503);
}
