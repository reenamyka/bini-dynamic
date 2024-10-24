import { Html, Head, Main, NextScript } from "next/document";

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <script 
        async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}>
      </script>
      <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
            }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}