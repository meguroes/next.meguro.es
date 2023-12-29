import { CONTACT_X_DESCRIPTION, CONTACT_X_EMOJI } from "~/libs/dictionary";

export const ContactX = () => {
  return (
    <div className="bg-gradient-primary relative mx-auto w-full max-w-601 space-y-8 rounded-24 px-12 pb-24 pt-12 text-center before:absolute before:inset-0 before:m-6 before:rounded-24 before:bg-white child:relative md:px-80 md:pb-36 md:pt-24">
      <div className="text-40 leading-40">{CONTACT_X_EMOJI}</div>
      <div className="text-14 font-bold leading-28 text-navy md:text-20">
        {CONTACT_X_DESCRIPTION.map((desc, index) => (
          <div key={index} dangerouslySetInnerHTML={{ __html: desc }} />
        ))}
      </div>
    </div>
  );
};
