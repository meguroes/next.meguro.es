import { usePageContext } from "~/hooks/usePageContext";
import { day } from "~/libs/day";
import {
  CONTACT_ID,
  CONTACT_TITLE,
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  GUIDELINE_INTRO_ID,
  GUIDELINE_INTRO_TITLE,
  LABEL_COMING_SOON,
  LABEL_FINISHED,
  MEETUP_LIST,
  MEETUP_LIST_ID,
  POST_PARTIAL_LIST_ID,
  POST_PARTIAL_LIST_TITLE,
  WE_ARE_BACK_DESCRIPTION,
  WE_ARE_BACK_ID,
  WE_ARE_BACK_TITLE,
} from "~/libs/dictionary";

export function Page() {
  const context = usePageContext();
  return (
    <>
      <section className="max-h-800 h-[100vh] -mt-[var(--height-header)] relative overflow-hidden">
        <img
          alt="Meguro.es Icon"
          src="/icon-squirrel.svg"
          width={730}
          height={800}
          className="absolute bottom-0 right-0 md:bottom-auto md:top-0 pointer-events-none w-375 md:w-730 h-410 md:h-800"
        />
        <div className="relative w-full h-full flex place-items-center ">
          <div className="space-y-18">
            <h2 className="text-64 font-lobster">{DEFAULT_TITLE}</h2>
            <div className="text-18 font-bold">{DEFAULT_DESCRIPTION}</div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-9 py-40 md:py-120 gap-y-32 md:gap-y-0">
        <h2
          id={WE_ARE_BACK_ID.replace(/\s/g, "-").toLowerCase()}
          className="md:col-span-4 md:mr-72"
        >
          <a
            href={`/#${WE_ARE_BACK_ID.replace(/\s/g, "-").toLowerCase()}`}
            className="font-bold space-y-8"
          >
            <span className="flex gap-x-8 place-items-center text-14 before:content-[''] before:block before:h-1 before:w-32 before:bg-white">
              {WE_ARE_BACK_ID}
            </span>
            <span className="text-28">{WE_ARE_BACK_TITLE}</span>
          </a>
        </h2>
        <div className="md:col-span-5 md:col-start-5 md:text-18 text-14 font-normal md:font-bold">
          {WE_ARE_BACK_DESCRIPTION}
        </div>
      </section>
      <section className="md:py-80 py-40">
        <h2 id={MEETUP_LIST_ID.toLowerCase()}>
          <a
            href={`/#${MEETUP_LIST_ID.toLowerCase()}`}
            className="font-bold space-y-8"
          >
            <span className="flex gap-x-8 place-items-center text-14 before:content-[''] before:block before:h-1 before:w-32 before:bg-white">
              {MEETUP_LIST_ID}
            </span>
            <span className="text-28">{MEETUP_LIST}</span>
          </a>
        </h2>
        <div>
          <ul>
            {context?.data?.meetupList?.map((meetup) => (
              <li key={meetup.fields.id}>
                <span>
                  {day(meetup.fields.date).isSameOrAfter(day(), "milliseconds")
                    ? LABEL_COMING_SOON
                    : LABEL_FINISHED}
                </span>
                <span>{day(meetup.fields.date).format("YYYY.MM.DD (dd)")}</span>
                <span>{meetup.fields.title}</span>
                <a
                  href={meetup.fields.locationUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Icon</span>
                  <span>{meetup.fields.locationName}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <h2 id={POST_PARTIAL_LIST_ID.toLowerCase()}>
          <a
            href={`/#${POST_PARTIAL_LIST_ID.toLowerCase()}`}
            className="font-bold space-y-8"
          >
            <span className="flex gap-x-8 place-items-center text-14 before:content-[''] before:block before:h-1 before:w-32 before:bg-white">
              {POST_PARTIAL_LIST_ID}
            </span>
            <span className="text-28">{POST_PARTIAL_LIST_TITLE}</span>
          </a>
        </h2>
        <div>
          <ul>
            {context?.data?.postList?.map((post) => (
              <li key={post.fields.slug}>
                <a href={`/posts/${post.fields.slug}`}>
                  <h3>{post.fields.title}</h3>
                  <div>
                    <time dateTime={post.fields.createdAt}>
                      {day(post.fields.createdAt).format("YYYY.MM.DD (dd)")}
                    </time>
                  </div>
                  <div>{post.fields.description}</div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-9 py-40 md:py-120 gap-y-32 md:gap-y-0">
        <div className="md:col-span-4 md:mr-72">
          <h2 id={CONTACT_ID.toLowerCase()}>
            <a
              href={`/#${CONTACT_ID.toLowerCase()}`}
              className="font-bold space-y-8"
            >
              <span className="flex gap-x-8 place-items-center text-14 before:content-[''] before:block before:h-1 before:w-32 before:bg-white">
                {CONTACT_ID}
              </span>
              <span className="text-28">{CONTACT_TITLE}</span>
            </a>
          </h2>
        </div>
        <div className="md:col-span-5 md:col-start-5 md:text-18 text-14 font-normal md:font-bold">
          <h2 id={GUIDELINE_INTRO_ID.toLowerCase()}>
            <a
              href={`/#${GUIDELINE_INTRO_ID.toLowerCase()}`}
              className="font-bold space-y-8"
            >
              <span className="flex gap-x-8 place-items-center text-14 before:content-[''] before:block before:h-1 before:w-32 before:bg-white">
                {GUIDELINE_INTRO_ID}
              </span>
              <span className="text-28">{GUIDELINE_INTRO_TITLE}</span>
            </a>
          </h2>
        </div>
      </section>
    </>
  );
}
