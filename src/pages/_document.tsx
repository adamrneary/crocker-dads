import Document, { Html, Head, Main, NextScript } from 'next/document';

import { AppConfig } from '../utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="apple-touch-icon"
            href="https://crockerschool.org/wp-content/uploads/2016/08/cropped-CrockerCircle.png"
          />
          <link
            rel="icon"
            href="https://crockerschool.org/wp-content/uploads/2016/08/cropped-CrockerCircle-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            href="https://crockerschool.org/wp-content/uploads/2016/08/cropped-CrockerCircle-192x192.png"
            sizes="192x192"
          />
          <link
            rel="apple-touch-icon"
            href="https://crockerschool.org/wp-content/uploads/2016/08/cropped-CrockerCircle-180x180.png"
          />
          <meta
            name="msapplication-TileImage"
            content="https://crockerschool.org/wp-content/uploads/2016/08/cropped-CrockerCircle-270x270.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
