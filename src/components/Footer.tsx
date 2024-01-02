import clsx from "clsx";
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
    <footer className="footer bg-darknavy p-24">
      <nav className="mb-12 md:mb-16">
        <ul className="flex place-content-center">
          {navItems.map((item, index) => (
            <li key={item.name}>
              <a
                href={item.href}
                target={item.target}
                className={clsx(
                  "block text-10 font-light leading-100 tracking-2 text-white md:text-12",
                  {
                    "ml-20 md:ml-48": index !== 0,
                  },
                )}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <small className="block text-center text-10 leading-100 tracking-2 text-gray">
        &copy; Meguro.es
      </small>
    </footer>
  );
};
