import { HTMLAttributes } from "preact/compat";
import { ABOUT, GUIDELINE, MEETUP_LIST } from "~/libs/dictionary";

const navItems: {
  name: string;
  href: string;
  target?: HTMLAttributes<HTMLAnchorElement>["target"];
}[] = [
  {
    name: ABOUT,
    href: "/about",
  },
  {
    name: MEETUP_LIST,
    href: "https://meguroes.connpass.com/event/",
    target: "_blank",
  },
  {
    name: GUIDELINE,
    href: "/guideline",
  },
];

export const Footer = () => {
  return (
    <footer className="footer space-y-16 bg-darknavy p-24 text-center md:px-80">
      <nav>
        <ul className="flex place-content-center gap-x-20 text-10 text-white md:gap-x-48 md:text-12">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} target={item.target}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <small className="text-10 text-gray">&copy; Meguro.es</small>
    </footer>
  );
};
