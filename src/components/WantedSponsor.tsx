import { WantedSponsor as WantedSponsorEntity } from "~/libs/entities/WantedSponsor";
import { useMemo } from "preact/hooks";
import { SectionHeader } from "./SectionHeader";

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
    <section>
      <h2 className="mb-24 text-64 font-black leading-[120%]">{title}</h2>
      <div className="mb-80 text-14 font-light leading-180 tracking-2">
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
      <div className="space-y-32">
        <h3 className="text-20 font-bold leading-140 tracking-2">
          {rewardsTitle}
        </h3>
        <ul className="grid grid-cols-1 gap-48 md:grid-cols-2 lg:grid-cols-3">
          {rewards.map((reward) => (
            <ol key={reward.id}>
              <SectionHeader
                as="h4"
                caption={reward.id}
                className="mb-20"
                label={reward.title}
                sizes="small"
              />
              <div
                className="text-14 font-light leading-180 tracking-2"
                dangerouslySetInnerHTML={{ __html: reward.desc }}
              />
            </ol>
          ))}
        </ul>
      </div>
    </section>
  );
};
