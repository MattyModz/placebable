import Document, { Html, Head, Main, NextScript } from "next/document";

class MainDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html
        className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
        lang="en"
      >
        <Head></Head>
        <body>
          <Main />
          <NextScript />

          <div id="portal"></div>
        </body>
      </Html>
    );
  }
}

export default MainDocument;

//  <noscript
//    dangerouslySetInnerHTML={{
//      __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MWGR3PG"
//             height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
//    }}
//  ></noscript>;
