import "../src/styles/index.scss";
import { AnimatePresence } from "framer-motion";
import Index from "../src/componants/Footer/index";
import Header from "../src/componants/Header/header";
import Footer from "../src/componants/Footer/index";
function MyApp({ Component, pageProps, router }) {
  return (
    <div>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default MyApp;
//  <ApolloProvider client={client}>
// </ApolloProvider>
