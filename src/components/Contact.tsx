import clsx from "clsx";
import { CONTACT_X_DESCRIPTION, CONTACT_X_EMOJI } from "~/libs/dictionary";

export const ContactX = () => {
  return (
    <div
      className={clsx(
        "bg-gradient-primary relative mx-auto flex w-full flex-col items-center space-y-8 rounded-24 px-0 pb-24 pt-12 md:w-fit md:px-80 md:pb-36 md:pt-36",
        "before:absolute before:inset-0 before:m-6 before:rounded-20 before:bg-white child:relative ",
      )}
    >
      <h2 className="w-fit text-40 leading-100">{CONTACT_X_EMOJI}</h2>
      <div className="text-center text-14 font-bold leading-140 tracking-[1.2px] text-navy md:text-20 md:tracking-2">
        {CONTACT_X_DESCRIPTION.map((desc, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: desc }} />
        ))}
      </div>
    </div>
  );
};
