import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { SessionProvider } from "next-auth/react"; // Import SessionProvider
import { Session } from "next-auth"; // Import Session type

function MyApp({ Component, pageProps }: AppProps & { session: Session }) { // Add type annotation for props
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </MantineProvider>
  );
}

export default MyApp;
