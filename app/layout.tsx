import { Provider } from "./src/components/container/Provider";
import Header from "./src/components/item/Header";
import Footer from "./src/components/item/Footer";
import { Box } from "./src/common";
import { setMetadata } from "./src/types/utils/setMetadata";

export const metadata = setMetadata({ title: "" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body>
        <Provider>
          <Header />
          <Box as="main">{children}</Box>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
