import "~/styles/globals.css";
import { ComponentChildren } from "preact";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

export const RootLayout = ({ children }: { children: ComponentChildren }) => {
  return (
    <>
      <Header />
      <main className="max-w-content mx-auto px-20 md:px-80 pb-40 md:pb-80">
        {children}
      </main>
      <Footer />
    </>
  );
};
