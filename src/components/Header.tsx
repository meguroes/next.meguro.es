export const Header = () => {
  return (
    <header className="px-20 md:px-80 pt-40 h-header max-w-content mx-auto">
      <h1>
        <a href="/">
          <img
            src="/logo-horizontal.svg"
            width={168}
            height={44}
            className="object-cover"
          />
        </a>
      </h1>
    </header>
  );
};
