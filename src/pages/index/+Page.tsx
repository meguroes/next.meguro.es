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
      {/* eslint tailwindcss/enforces-negative-arbitrary-values: "off" */}
      <section className="relative h-[100vh] max-h-800 overflow-hidden md:-mt-[var(--height-header)]">
        <img
          alt="Meguro.es Icon"
          src="/icon_squirrel.svg"
          width={730}
          height={800}
          className="pointer-events-none absolute bottom-0 right-0 h-410 max-w-375 lg:bottom-auto lg:top-0 lg:h-800 lg:max-w-730"
        />
        <div className="relative h-full w-full pt-[15%] lg:flex lg:place-items-center lg:pt-0">
          <div className="space-y-18">
            <h2 className="font-lobster text-64">{DEFAULT_TITLE}</h2>
            <div className="text-18 font-bold">{DEFAULT_DESCRIPTION}</div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 gap-y-32 py-40 md:grid-cols-9 md:gap-y-0 md:py-120">
        <h2
          id={WE_ARE_BACK_ID.replace(/\s/g, "-").toLowerCase()}
          className="md:col-span-4 md:mr-72"
        >
          <a
            href={`/#${WE_ARE_BACK_ID.replace(/\s/g, "-").toLowerCase()}`}
            className="space-y-8 font-bold"
          >
            <span className="flex place-items-center gap-x-8 text-14 before:block before:h-1 before:w-32 before:bg-white before:content-['']">
              {WE_ARE_BACK_ID}
            </span>
            <span className="text-28">{WE_ARE_BACK_TITLE}</span>
          </a>
        </h2>
        <div className="text-14 font-normal md:col-span-5 md:col-start-5 md:text-18 md:font-bold">
          {WE_ARE_BACK_DESCRIPTION}
        </div>
      </section>
      <section className="py-40 md:py-80">
        <h2 id={MEETUP_LIST_ID.toLowerCase()}>
          <a
            href={`/#${MEETUP_LIST_ID.toLowerCase()}`}
            className="space-y-8 font-bold"
          >
            <span className="flex place-items-center gap-x-8 text-14 before:block before:h-1 before:w-32 before:bg-white before:content-['']">
              {MEETUP_LIST_ID}
            </span>
            <span className="text-28">{MEETUP_LIST}</span>
          </a>
        </h2>
        <div>
          <ul>
            {context?.data?.meetupList?.map((meetup, index) => (
              <li key={meetup.fields.id || index}>
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
            className="space-y-8 font-bold"
          >
            <span className="flex place-items-center gap-x-8 text-14 before:block before:h-1 before:w-32 before:bg-white before:content-['']">
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
      <section className="grid grid-cols-1 gap-y-32 py-40 md:grid-cols-9 md:gap-y-0 md:py-120">
        <div className="md:col-span-4 md:mr-72">
          <h2 id={CONTACT_ID.toLowerCase()}>
            <a
              href={`/#${CONTACT_ID.toLowerCase()}`}
              className="space-y-8 font-bold"
            >
              <span className="flex place-items-center gap-x-8 text-14 before:block before:h-1 before:w-32 before:bg-white before:content-['']">
                {CONTACT_ID}
              </span>
              <span className="text-28">{CONTACT_TITLE}</span>
            </a>
          </h2>
        </div>
        <div className="text-14 font-normal md:col-span-5 md:col-start-5 md:text-18 md:font-bold">
          <h2 id={GUIDELINE_INTRO_ID.toLowerCase()}>
            <a
              href={`/#${GUIDELINE_INTRO_ID.toLowerCase()}`}
              className="space-y-8 font-bold"
            >
              <span className="flex place-items-center gap-x-8 text-14 before:block before:h-1 before:w-32 before:bg-white before:content-['']">
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
