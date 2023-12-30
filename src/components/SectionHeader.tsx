import { FC } from "preact/compat";
import { SectionHeaderCaption } from "./SectionHeaderCaption";
import { h } from "preact";
import clsx from "clsx";

interface Props<
  T extends h.JSX.ElementType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
> {
  caption: string;
  label: string;
  sizes: "large" | "small";
  as?: T;
  className?: string;
}

export const SectionHeader: FC<Props> = ({
  as,
  caption,
  className,
  sizes,
  label,
}) => {
  const Element = as || "p";

  return (
    <div className={className}>
      <SectionHeaderCaption
        sizes={sizes}
        text={caption}
        className={clsx({
          "text-10": sizes === "small",
        })}
      />
      <Element
        className={clsx("font-bold leading-140 tracking-2", {
          "mt-8 text-28": sizes === "large",
          "mt-12 text-20": sizes === "small",
        })}
      >
        {label}
      </Element>
    </div>
  );
};
