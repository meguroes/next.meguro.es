import clsx from "clsx";

export const Skeleton = ({
  showThumbnail = true,
  className,
}: {
  showThumbnail?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "animate-pulse space-x-4 rounded-12 bg-white-alpha16 p-4",
        className,
      )}
    >
      <div className="h-full space-y-24 p-24">
        {showThumbnail && <div className="h-3/6 rounded-md bg-white-alpha12" />}
        <div className="h-16 w-3/4 rounded bg-white-alpha12" />
        <div className="space-y-8">
          <div className="h-16 rounded bg-white-alpha12" />
          <div className="h-16 w-5/6 rounded bg-white-alpha12" />
          <div className="h-16 w-4/6 rounded bg-white-alpha12" />
        </div>
      </div>
    </div>
  );
};
