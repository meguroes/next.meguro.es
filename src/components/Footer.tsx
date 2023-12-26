import { HTMLAttributes } from "preact/compat";
import { ABOUT, GUIDELINE, MEETUP_LIST, POST_LIST } from "~/libs/dictionary";

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
    name: POST_LIST,
    href: "/posts",
  },
  {
    name: GUIDELINE,
    href: "/guideline",
  },
];

export const Footer = () => {
  return (
    <footer className="footer text-center p-2 bg-darknavy p-24 md:px-80 space-y-16">
      <nav>
        <ul className="flex text-white place-content-center text-10 md:text-12 gap-x-20 md:gap-x-48">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} target={item.target}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <small className="text-gray text-10">&copy; Meguro.es</small>
    </footer>
  );
};
