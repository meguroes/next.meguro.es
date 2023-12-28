import h from "preact";

export const SectionHeaderCaption = <T extends h.JSX.ElementType = "span">({
  text,
  as,
}: {
  text: string;
  as?: T;
  className?: string;
} & Omit<h.ComponentProps<T>, "as">) => {
  const Element = as || "span";
  return (
    <Element className="flex place-items-center gap-x-8 text-14 before:block before:h-1 before:w-32 before:bg-white before:content-['']">
      {text}
    </Element>
  );
};
