export const Header = () => {
  return (
    <header className="mx-auto h-header max-w-content px-20 pt-40 md:px-80">
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
