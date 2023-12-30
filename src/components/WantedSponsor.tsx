import {
  WANTED_SPONSOR_DESCRIPTION,
  WANTED_SPONSOR_REWARD,
  WANTED_SPONSOR_REWARD_TITLE,
  WANTED_SPONSOR_TITLE,
} from "~/libs/dictionary";
import { SectionHeaderCaption } from "./SectionHeaderCaption";

export const WantedSponsor = () => {
  return (
    <div className="space-y-48">
      <div className="space-y-24">
        <h2 className="text-64 font-black">{WANTED_SPONSOR_TITLE}</h2>
        <div className="text-14">
          {WANTED_SPONSOR_DESCRIPTION.map((desc, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: desc }} />
          ))}
        </div>
      </div>
      <div className="space-y-32">
        <h3 className="text-20 font-bold">{WANTED_SPONSOR_REWARD_TITLE}</h3>
        <ul className="grid grid-cols-1 gap-48 md:grid-cols-3">
          {WANTED_SPONSOR_REWARD.map((reward) => (
            <ol key={reward.id} className="space-y-20">
              <div className="space-y-12">
                <SectionHeaderCaption text={reward.id} />
                <h4 className="text-20 font-bold">{reward.title}</h4>
              </div>
              <div>
                {reward.description.map((desc, index) => (
                  <div
                    className="text-14"
                    dangerouslySetInnerHTML={{ __html: desc }}
                    key={index}
                  />
                ))}
              </div>
            </ol>
          ))}
        </ul>
      </div>
    </div>
  );
};
