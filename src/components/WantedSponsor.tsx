import { SectionHeaderCaption } from "./SectionHeaderCaption";
import { WantedSponsor as WantedSponsorEntity } from "~/libs/entities/WantedSponsor";
import { useMemo } from "preact/hooks";

export const WantedSponsor = ({
  title,
  summary,
  rewardsTitle,
  rewardsTitle01,
  rewards01,
  rewardsTitle02,
  rewards02,
  rewardsTitle03,
  rewards03,
}: WantedSponsorEntity["fields"]) => {
  const rewards = useMemo(
    () => [
      {
        id: "01",
        title: rewardsTitle01,
        desc: rewards01,
      },
      {
        id: "02",
        title: rewardsTitle02,
        desc: rewards02,
      },
      {
        id: "03",
        title: rewardsTitle03,
        desc: rewards03,
      },
    ],
    [
      rewards01,
      rewards02,
      rewards03,
      rewardsTitle01,
      rewardsTitle02,
      rewardsTitle03,
    ],
  );
  return (
    <div className="space-y-48">
      <div className="space-y-24">
        <h2 className="text-64 font-black">{title}</h2>
        <div className="text-14">
          <div dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
      </div>
      <div className="space-y-32">
        <h3 className="text-20 font-bold">{rewardsTitle}</h3>
        <ul className="grid grid-cols-1 gap-48 md:grid-cols-3">
          {rewards.map((reward) => (
            <ol key={reward.id} className="space-y-20">
              <div className="space-y-12">
                <SectionHeaderCaption text={reward.id} />
                <h4 className="text-20 font-bold">{reward.title}</h4>
              </div>
              <div
                className="text-14"
                dangerouslySetInnerHTML={{ __html: reward.desc }}
              />
            </ol>
          ))}
        </ul>
      </div>
    </div>
  );
};
