import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const RootLayout = ({
  children,
  title = "Megueo.es",
}: {
  children: any[];
  title?: string;
}) => {
  return (
    <html lang="ja">
      <head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/styles/globals.css" />
        {/** TODO: リリース前に外す */}
        <meta name="robots" content="none" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};
