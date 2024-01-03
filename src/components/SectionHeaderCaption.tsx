import clsx from "clsx";
import h from "preact";

export const SectionHeaderCaption = <T extends h.JSX.ElementType = "span">({
  text,
  as,
  sizes = "large",
  className,
}: {
  text: string;
  as?: T;
  sizes?: "large" | "small";
  className?: string;
} & Omit<h.ComponentProps<T>, "as">) => {
  const Element = as || "span";
  return (
    <Element
      className={clsx(
        "flex place-items-center gap-x-8 font-bold leading-100 tracking-1 before:block before:h-1 before:w-32 before:bg-white before:content-['']",
        {
          "text-14": sizes === "large",
          "text-10": sizes === "small",
        },
        className,
      )}
    >
      {text}
    </Element>
  );
};
