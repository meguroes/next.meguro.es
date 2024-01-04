import clsx from "clsx";
import { useEffect, useState } from "preact/hooks";
import { SectionHeader } from "~/components/SectionHeader";
import { SectionHeaderCaption } from "~/components/SectionHeaderCaption";
import { Skeleton } from "~/components/Skeleton";
import { useGetPostList } from "~/hooks/useGetPostList";
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
  INFORMATION_LIST_ID,
  INFORMATION_LIST_TITLE,
  WE_ARE_BACK_DESCRIPTION,
  WE_ARE_BACK_ID,
  WE_ARE_BACK_TITLE,
  // LABEL_READ_MORE,
  ERROR_FAILED_TO_LOAD,
  X_ACCOUNT_ID,
  X_ACCOUNT_URL,
  GUIDELINE_INTRO_DESCRIPTION,
  LABEL_OPEN_GUIDELINE,
  RECENT_MEETUP_ID,
  LABEL_OPEN_MEETUP,
  CONNPASS_ACCOUNT_ID,
  CONNPASS_ACCOUNT_URL,
} from "~/libs/dictionary";
import { Post } from "~/libs/entities/Post";

const POST_LIMIT = 3;

export function Page() {
  const context = usePageContext();
  // const [size, setSize] = useState(0);
  const [postList, setPostList] = useState<Post[]>([]);
  const { data, isLoading, error } = useGetPostList(0, POST_LIMIT);

  useEffect(() => {
    setPostList((prev) => [...prev, ...data]);
  }, [data]);

  // const handleClickReadMorePost = useThrottle(
  //   () => setSize((prev) => prev + 1),
  //   1000,
  // );

  useEffect(() => {
    return () => {
      setPostList([]);
    };
  }, []);

  return (
    <>
      {/* eslint tailwindcss/enforces-negative-arbitrary-values: "off" */}
      <section className="h-[calc(100vh-120px)] overflow-x-hidden px-20 md:px-80">
        {/* 背景のリス部分 */}
        <div className="absolute left-1/2 top-0 mx-auto h-full w-full max-w-[1280px] -translate-x-1/2 overflow-x-hidden overflow-y-visible xl:overflow-x-visible">
          <img
            alt=""
            src="/icon_squirrel.svg"
            width={730}
            height={800}
            className="pointer-events-none absolute -right-8 bottom-0 sm:-right-16 sm:bottom-auto sm:top-[calc(50%-16px)] sm:w-3/4 sm:-translate-y-1/2 md:w-fit"
          />
        </div>
        <div className="relative flex h-full flex-col pt-120 sm:pt-183">
          <h2 className="mb-24 w-fit font-lobster text-64 leading-100 md:mb-24">
            {DEFAULT_TITLE}
          </h2>
          <p
            className="mb-64 text-12 font-bold leading-140 tracking-2 md:text-16"
            dangerouslySetInnerHTML={{ __html: DEFAULT_DESCRIPTION }}
          />
          {context?.data?.recentMeetup &&
            day(context.data.recentMeetup.fields.date).isSameOrAfter(
              day(),
              "milliseconds",
            ) && (
              <div
                className={clsx(
                  "relative z-10 mb-20 mt-auto w-full rounded-12 border border-gradient-start bg-navy-alpha80 px-18 pb-16 pt-20 backdrop-blur-[24px] sm:mt-0 sm:max-w-320",
                )}
              >
                <div className="relative z-10">
                  <SectionHeaderCaption
                    text={RECENT_MEETUP_ID}
                    as="div"
                    sizes="small"
                    className="mb-12"
                  />
                  <h3 className="mb-12 text-12 leading-140 tracking-1">
                    {context.data.recentMeetup.fields.title}
                  </h3>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="mb-4 flex items-center">
                        <img
                          alt="開催日時"
                          className="mr-6"
                          src="/icon_event.svg"
                          width={16}
                          height={16}
                        />
                        <span className="text-10 leading-140 tracking-2">
                          {day(context.data.recentMeetup.fields.date).format(
                            "YYYY.MM.DD (dd)",
                          )}
                        </span>
                      </p>
                      <div className="flex place-items-center">
                        <div className="grow">
                          <a
                            href={context.data.recentMeetup.fields.locationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-fit place-items-center gap-x-6 text-10"
                          >
                            <img
                              alt=""
                              src="icon_location_ghost.svg"
                              width={16}
                              height={16}
                            />
                            <span>
                              {context.data.recentMeetup.fields.locationName}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex place-items-center gap-x-2">
                      <a
                        className="text-8 tracking-2 underline"
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
      </section>
      <section className="relative z-10 flex flex-col px-20 pb-40 pt-120 md:px-80 lg:flex-row lg:items-center lg:pb-120">
        <SectionHeader
          as="h2"
          caption={WE_ARE_BACK_ID}
          label={WE_ARE_BACK_TITLE}
          sizes="large"
          className="mb-32 shrink-0 lg:mb-0 lg:mr-72"
        />
        <p className="text-14 font-light leading-180 tracking-2 md:text-18 md:font-bold">
          {WE_ARE_BACK_DESCRIPTION}
        </p>
      </section>
      <section className="px-20 py-40 md:p-80">
        <SectionHeader
          as="h2"
          caption={MEETUP_LIST_ID}
          label={MEETUP_LIST}
          sizes="large"
          className="mb-32"
        />
        <ol className="w-full table-auto">
          {context?.data?.meetupList?.map((meetup, index) => {
            const isComingSoon = day(meetup.fields.date).isSameOrAfter(
              day(),
              "milliseconds",
            );
            return (
              <li
                key={`${meetup.fields.id}-${index}`}
                className="border-b border-white-alpha12"
              >
                <a
                  href={meetup.fields.connpassUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <div className="flex items-center px-0 py-24 lg:pl-4 lg:pr-32">
                    <p
                      className={clsx(
                        "h-fit w-fit whitespace-nowrap rounded-8 py-8 pl-12 pr-10 text-center text-14 font-bold leading-100 tracking-2 md:rounded-12 md:py-12 md:pl-16 md:pr-14 md:text-18",
                        {
                          "bg-white-alpha12 text-white": !isComingSoon,
                          "bg-gradient-primary relative before:absolute before:inset-0 before:m-2 before:rounded-6 before:bg-navy md:before:rounded-10":
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
                    </p>
                    {/* --- SPサイズの表示要素 --- */}
                    <div className="ml-12 md:ml-24 lg:hidden">
                      <p className="mb-16 text-18 font-bold leading-140 tracking-2">
                        {meetup.fields.title}
                      </p>
                      <p className="mb-4 flex items-center text-12 font-bold leading-140 tracking-2">
                        <img
                          alt=""
                          className="mr-6"
                          src="/icon_event.svg"
                          width={20}
                          height={20}
                        />
                        <time dateTime={meetup.fields.date}>
                          {day(meetup.fields.date).format("YYYY.MM.DD（dd）")}
                        </time>
                      </p>
                      <p className="flex items-center pr-32 text-12 font-bold leading-140 tracking-2">
                        <img
                          alt=""
                          className="mr-6"
                          src="/icon_location_ghost.svg"
                          width={20}
                          height={20}
                        />
                        <span>{meetup.fields.locationName}</span>
                      </p>
                    </div>
                    {/* --- SPサイズの表示要素 --- */}
                  </div>
                  <div className="hidden whitespace-nowrap pr-32 text-18 font-bold leading-100 tracking-2 lg:block">
                    {day(meetup.fields.date).format("YYYY.MM.DD（dd）")}
                  </div>
                  <div className="hidden grow pr-32 text-18 font-bold leading-140 tracking-2 lg:block">
                    {meetup.fields.title}
                  </div>
                  <div className="hidden max-w-320 lg:block">
                    <div className="flex h-full items-center pr-32 text-16 font-bold leading-140 tracking-2">
                      <img
                        alt=""
                        className="mr-6"
                        src="/icon_location_ghost.svg"
                        width={28}
                        height={28}
                      />
                      <p>{meetup.fields.locationName}</p>
                    </div>
                  </div>
                </a>
              </li>
            );
          })}
        </ol>
      </section>
      <section className="px-20 py-40 md:p-80">
        <SectionHeader
          as="h2"
          caption={INFORMATION_LIST_ID}
          label={INFORMATION_LIST_TITLE}
          sizes="large"
          className="mb-32"
        />
        <div>
          <ul className="grid grid-cols-1 gap-y-48 md:grid-cols-2 md:gap-32 lg:grid-cols-3">
            {!isLoading
              ? postList.slice(0, POST_LIMIT).map((post) => (
                  <li key={post.fields.slug}>
                    <a href={`/posts/${post.fields.slug}`}>
                      <img
                        className="mb-18 w-full rounded-12 border border-gray object-cover md:mb-24 md:max-h-200 md:w-auto"
                        alt=""
                        src={
                          post.fields.heroImageUrl ||
                          "/image_information_hero_fallback.png"
                        }
                        width={405}
                        height={200}
                      />
                      <h3 className="mb-18 line-clamp-2 text-20 font-bold leading-140 tracking-1 lg:mb-24 lg:text-24">
                        {post.fields.title}
                      </h3>
                      <p className="flex items-center">
                        <img
                          src="/icon_event.svg"
                          width={28}
                          height={28}
                          className="mr-6 h-20 w-20 lg:h-28 lg:w-28"
                        />
                        <time
                          dateTime={post.fields.createdAt}
                          className="text-12 font-bold leading-100 tracking-2 lg:text-16"
                        >
                          {day(post.fields.createdAt).format("YYYY.MM.DD (dd)")}
                        </time>
                      </p>
                      {/* <div className="line-clamp-2">
                          {post.fields.description}
                        </div> */}
                    </a>
                  </li>
                ))
              : Array.from({ length: POST_LIMIT }).map((_, index) => (
                  <li key={index}>
                    <Skeleton className="min-h-388" />
                  </li>
                ))}
          </ul>
          {error && <div>{ERROR_FAILED_TO_LOAD}</div>}
          {/* {!(data.length < POST_LIMIT) && (
            <button
              onClick={handleClickReadMorePost}
              className="mx-auto block w-full rounded-full border-2 border-white py-14 text-18 font-bold md:w-360 md:py-18"
            >
              {LABEL_READ_MORE}
            </button>
          )} */}
        </div>
      </section>
      <div className="flex flex-col-reverse lg:flex-row">
        <section className="shrink-0 p-0 px-20 py-40 md:py-80 md:pl-80 md:pr-40">
          <SectionHeader
            as="h2"
            caption={CONTACT_ID}
            label={CONTACT_TITLE}
            sizes="large"
            className="mb-32 md:mb-48 md:min-w-360"
          />
          <a
            className="mb-16 flex items-center"
            href={X_ACCOUNT_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="x icon"
              className="mr-6"
              src="/icon_x.svg"
              width={24}
              height={24}
            />
            <span className="pb-4 text-16 font-bold leading-100 tracking-2">
              {X_ACCOUNT_ID}
            </span>
          </a>
          <a
            className="flex items-center"
            href={CONNPASS_ACCOUNT_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="x icon"
              className="mr-6"
              src="/icon_connpass.svg"
              width={24}
              height={24}
            />
            <span className="pb-4 text-16 font-bold leading-100 tracking-2">
              {CONNPASS_ACCOUNT_ID}
            </span>
          </a>
        </section>
        <section className="grow p-0 px-20 py-40 md:p-80 lg:pl-40">
          <SectionHeader
            as="h2"
            caption={GUIDELINE_INTRO_ID}
            label={GUIDELINE_INTRO_TITLE}
            sizes="large"
            className="mb-32"
          />
          <p
            className="mb-40 text-14 font-light leading-180 tracking-2 md:text-18"
            dangerouslySetInnerHTML={{ __html: GUIDELINE_INTRO_DESCRIPTION }}
          />
          <a
            href="/guideline"
            className="bg-gradient-primary-to-br block w-full rounded-full px-32 py-14 text-center text-16 font-bold leading-100 tracking-2 text-white md:py-18 md:text-18"
          >
            {LABEL_OPEN_GUIDELINE}
          </a>
        </section>
      </div>
    </>
  );
}
