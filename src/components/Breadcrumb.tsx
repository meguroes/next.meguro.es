import { FC } from "preact/compat";

interface Props {
  items: Array<{
    label: string;
    to: string;
  }>;
}

export const Breadcrumb: FC<Props> = ({ items }) => {
  return (
    <ul className="flex items-center">
      <li className="text-10 font-bold leading-140 tracking-2">
        <a href="/">Meguro.es</a>
      </li>
      {items.map(({ label, to }) => (
        <li
          key={to}
          className="flex items-center text-10 font-bold leading-140 tracking-2"
        >
          <img
            alt=""
            className="mx-12"
            src="/icon_chevron_right.svg"
            width={16}
            height={16}
          />
          <a href={to}>{label}</a>
        </li>
      ))}
    </ul>
  );
};
