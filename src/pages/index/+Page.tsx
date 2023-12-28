import clsx from "clsx";
import { useEffect, useState } from "preact/hooks";
import { SectionHeaderCaption } from "~/components/SectionHeaderCaption";
import { Skeleton } from "~/components/Skeleton";
import { useGetPostList } from "~/hooks/useGetPostList";
import { usePageContext } from "~/hooks/usePageContext";
import { useThrottle } from "~/hooks/useThrottle";
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
  INFORMATION_LIST_ID,
  INFORMATION_LIST_TITLE,
  WE_ARE_BACK_DESCRIPTION,
  WE_ARE_BACK_ID,
  WE_ARE_BACK_TITLE,
  LABEL_READ_MORE,
  ERROR_FAILED_TO_LOAD,
  X_ACCOUNT_ID,
  X_ACCOUNT_URL,
  GUIDELINE_INTRO_DESCRIPTION,
  LABEL_OPEN_GUIDELINE,
  RECENT_MEETUP_ID,
  LABEL_OPEN_MEETUP,
} from "~/libs/dictionary";
import { Post } from "~/libs/entities/Post";

const POST_LIMIT = 3;

export function Page() {
  const context = usePageContext();
  const [size, setSize] = useState(0);
  const [postList, setPostList] = useState<Post[]>([]);
  const { data, isLoading, error } = useGetPostList(size, POST_LIMIT);

  useEffect(() => {
    setPostList((prev) => [...prev, ...data]);
  }, [data]);

  const handleClickReadMorePost = useThrottle(
    () => setSize((prev) => prev + 1),
    1000,
  );

  useEffect(() => {
    return () => {
      setPostList([]);
    };
  }, []);

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
          <div className="md:space-y-64">
            <div className="space-y-18">
              <h2 className="font-lobster text-64">{DEFAULT_TITLE}</h2>
              <div className="text-18 font-bold">{DEFAULT_DESCRIPTION}</div>
            </div>
            {context?.data?.recentMeetup && (
              <div className="bg-gradient-primary relative hidden w-320 space-y-12 rounded-12 px-16 py-20 font-bold before:absolute before:inset-0 before:m-2 before:rounded-12 before:bg-navy child:relative md:block">
                <SectionHeaderCaption text={RECENT_MEETUP_ID} as="div" />
                <h3 className="text-12">
                  {context.data.recentMeetup.fields.title}
                </h3>
                <div className="space-y-6">
                  <div className="flex place-items-center gap-x-6 text-10">
                    <img
                      alt="event icon"
                      src="/icon_event.svg"
                      width={16}
                      height={16}
                    />
                    <span>
                      {day(context.data.recentMeetup.fields.date).format(
                        "YYYY.MM.DD (dd)",
                      )}
                    </span>
                  </div>
                  <div className="flex place-items-center">
                    <div className="grow">
                      <a
                        href={context.data.recentMeetup.fields.locationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex place-items-center gap-x-6 text-10"
                      >
                        <img
                          alt="location ghost icon"
                          src="icon_location_ghost.svg"
                          width={16}
                          height={16}
                        />
                        <span>
                          {context.data.recentMeetup.fields.locationName}
                        </span>
                      </a>
                    </div>
                    <div className="flex place-items-center gap-x-2">
                      <a
                        className="text-8 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={context.data.recentMeetup.fields.connpassUrl}
                      >
                        {LABEL_OPEN_MEETUP}
                      </a>
                      <img
                        alt="open icon"
                        src="/icon_open.svg"
                        width={10}
                        height={10}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 gap-y-32 pb-40 pt-72 md:grid-cols-9 md:gap-y-0 md:py-120">
        <h2
          id={WE_ARE_BACK_ID.replace(/\s/g, "-").toLowerCase()}
          className="md:col-span-4 md:mr-72"
        >
          <a
            href={`/#${WE_ARE_BACK_ID.replace(/\s/g, "-").toLowerCase()}`}
            className="space-y-8 font-bold"
          >
            <SectionHeaderCaption text={WE_ARE_BACK_ID} />
            <span className="text-28">{WE_ARE_BACK_TITLE}</span>
          </a>
        </h2>
        <div className="text-14 font-normal md:col-span-5 md:col-start-5 md:text-18 md:font-bold">
          {WE_ARE_BACK_DESCRIPTION}
        </div>
      </section>
      <section className="space-y-32 py-40 md:py-80">
        <h2 id={MEETUP_LIST_ID.toLowerCase()}>
          <a
            href={`/#${MEETUP_LIST_ID.toLowerCase()}`}
            className="space-y-8 font-bold"
          >
            <SectionHeaderCaption text={MEETUP_LIST_ID} />
            <span className="text-28">{MEETUP_LIST}</span>
          </a>
        </h2>
        <div>
          <ul>
            {context?.data?.meetupList?.map((meetup, index) => {
              const isComingSoon = day(meetup.fields.date).isSameOrAfter(
                day(),
                "milliseconds",
              );
              return (
                <li
                  key={meetup.fields.id || index}
                  className="flex place-items-center gap-x-32 border-b border-white-alpha12 py-24 pl-4 pr-48"
                >
                  <span
                    className={clsx(
                      "whitespace-nowrap rounded-12 px-10 py-8 text-14 font-bold md:px-16 md:py-12 md:text-18",
                      {
                        "bg-white-alpha12 text-white": !isComingSoon,
                        "bg-gradient-primary relative before:absolute before:inset-0 before:m-2 before:rounded-12 before:bg-navy":
                          isComingSoon,
                      },
                    )}
                  >
                    {isComingSoon ? (
                      <span className="bg-gradient-primary relative bg-clip-text text-transparent">
                        {LABEL_COMING_SOON}
                      </span>
                    ) : (
                      LABEL_FINISHED
                    )}
                  </span>
                  <span className="grid grid-cols-1 md:flex md:grow md:place-items-center md:gap-x-32">
                    <span className="hidden text-18 md:inline">
                      {day(meetup.fields.date).format("YYYY.MM.DD (dd)")}
                    </span>
                    <span className="text-18 md:grow">
                      {meetup.fields.title}
                    </span>
                    <span className="mt-16 inline text-12 md:hidden">
                      {day(meetup.fields.date).format("YYYY.MM.DD (dd)")}
                    </span>
                    <a
                      href={meetup.fields.locationUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="flex place-items-center gap-x-6 text-12 md:w-216 md:text-18"
                    >
                      <img
                        alt="location icon"
                        src="/icon_location_ghost.svg"
                        width={28}
                        height={28}
                      />
                      <span>{meetup.fields.locationName}</span>
                    </a>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className="space-y-32 py-40 md:py-80">
        <h2 id={INFORMATION_LIST_ID.toLowerCase()}>
          <a
            href={`/#${INFORMATION_LIST_ID.toLowerCase()}`}
            className="space-y-8 font-bold"
          >
            <SectionHeaderCaption text={INFORMATION_LIST_ID} />
            <span className="text-28">{INFORMATION_LIST_TITLE}</span>
          </a>
        </h2>
        <div className="space-y-56">
          <ul className="grid grid-cols-1 gap-y-48 md:grid-cols-3 md:gap-32">
            {!isLoading && !error
              ? postList.map((post) => (
                  <li
                    key={post.fields.slug}
                    className="mx-auto w-full max-w-405 md:min-h-388"
                  >
                    <a
                      href={`/posts/${post.fields.slug}`}
                      className="space-y-24"
                    >
                      <img
                        className="h-200 w-full rounded-12 object-cover object-center md:h-240"
                        alt={`${post.fields.title} Thumbnail`}
                        src={
                          post.fields.heroImageUrl || "/image_hero_fallback.png"
                        }
                      />
                      <h3 className="min-h-[calc(2em_*_2)] text-20 font-bold md:text-24">
                        {post.fields.title}
                      </h3>
                      <div className="space-y-10">
                        <div className="flex gap-x-6">
                          <img src="/icon_event.svg" width={28} height={28} />
                          <time dateTime={post.fields.createdAt}>
                            {day(post.fields.createdAt).format(
                              "YYYY.MM.DD (dd)",
                            )}
                          </time>
                        </div>
                        <div className="line-clamp-2">
                          {post.fields.description}
                        </div>
                      </div>
                    </a>
                  </li>
                ))
              : [...new Array(POST_LIMIT)].map((_, index) => (
                  <li key={index}>
                    <Skeleton className="min-h-388" />
                  </li>
                ))}
          </ul>
          {error && <div>{ERROR_FAILED_TO_LOAD}</div>}
          {!(data.length < POST_LIMIT) && (
            <button
              onClick={handleClickReadMorePost}
              className="mx-auto block w-full rounded-full border-2 border-white py-14 text-18 font-bold md:w-360 md:py-18"
            >
              {LABEL_READ_MORE}
            </button>
          )}
        </div>
      </section>
      <section className="grid grid-cols-1 gap-y-80 md:grid-cols-9 md:gap-y-0">
        <div className="order-last space-y-40 md:order-none md:col-span-4 md:mr-72">
          <h2 id={CONTACT_ID.toLowerCase()}>
            <a
              href={`/#${CONTACT_ID.toLowerCase()}`}
              className="space-y-8 font-bold"
            >
              <SectionHeaderCaption text={CONTACT_ID} />
              <span className="text-28">{CONTACT_TITLE}</span>
            </a>
          </h2>
          <div>
            <a className="flex place-items-center gap-x-4" href={X_ACCOUNT_URL}>
              <img alt="x icon" src="/icon_x.svg" width={24} height={24} />
              <span className="pb-4 text-16 font-bold">{X_ACCOUNT_ID}</span>
            </a>
          </div>
        </div>
        <div className="space-y-32 text-14 md:col-span-5 md:col-start-5 md:text-18">
          <h2 id={GUIDELINE_INTRO_ID.toLowerCase()}>
            <a
              href={`/#${GUIDELINE_INTRO_ID.toLowerCase()}`}
              className="space-y-8 font-bold"
            >
              <SectionHeaderCaption text={GUIDELINE_INTRO_ID} />
              <span className="text-28">{GUIDELINE_INTRO_TITLE}</span>
            </a>
          </h2>
          <div className="space-y-40">
            <div>
              {GUIDELINE_INTRO_DESCRIPTION.map((desc) => (
                <div key={desc}>{desc}</div>
              ))}
            </div>
            <a
              href="/guideline"
              className="bg-gradient-primary-to-br block w-full rounded-full px-32 py-14 text-center text-16 font-bold text-white md:py-24 md:text-24"
            >
              {LABEL_OPEN_GUIDELINE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
