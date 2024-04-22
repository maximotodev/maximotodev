import Layout from "./Layout";
import "@/styles/globals.css";
import "@/styles/navbar.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";

// export const metadata: Metadata = {
//   title: {
//     template: "%s | Michel BTOMPE",
//     default: "Michel BTOMPE - Software Engineer",
//   },
//   description:
//     "Michel BTOMPE ist a Cameroonian Software Engineer with a passion for Code: 'I like to build or improve innovative solutions to everyday problems in society'",
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://michelbtompe.vercel.app",
//     siteName: "Michel BTOMPE - Software Engineer",
//     images: [
//       {
//         url: `${banner}`,
//         width: 1350,
//         height: 744,
//         alt: "Michel BTOMPE",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "@Tom-Michel",
//     creator: "@Tom-michel",
//     images: [
//       {
//         url: `${banner}`,
//         width: 1350,
//         height: 744,
//         alt: "Michel BTOMPE",
//       },
//     ],
//   },
//   authors: [{ name: "Michel BTOMPE", url: "https://michelbtompe.vercel.app" }],
//   keywords: "portfolio, profile, software, dev",
// };

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>The LORD is King</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta
          name="description"
          content="Michel BTOMPE is a Cameroonian Software Engineer with a passion for Code: 'I like to build or improve innovative solutions to everyday problems in society'"
        />
        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/banner.png" />
        <meta property="og:url" content="https://michelbtompe.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name:"
          content="Michel BTOMPE - Software Engineer"
        />
        <meta property="og:title" content="Michel BTOMPE - Software Engineer" />
        <meta
          property="og:description"
          content="Michel BTOMPE is a Cameroonian Software Engineer with a passion for Code: 'I like to build or improve innovative solutions to everyday problems in society'"
        />
        <meta property="og:image" content="/banner.png" /> */}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
