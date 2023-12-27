import "~/styles/globals.css";
import { ComponentChildren } from "preact";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

export const RootLayout = ({ children }: { children: ComponentChildren }) => {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-20 md:px-80">{children}</main>
      <Footer />
    </>
  );
};
