export const Header = () => {
  return (
    <header className="relative z-header mx-auto h-header max-w-content px-20 pt-40 md:px-80">
      <h1 className="w-fit">
        <a href="/">
          <img
            src="/logo_horizontal.svg"
            width={168}
            height={44}
            className="object-cover"
          />
        </a>
      </h1>
    </header>
  );
};
