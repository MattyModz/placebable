import "../src/styles/index.scss";
import { AnimatePresence } from "framer-motion";
// import Index from "../src/componants/Footer/index";
import Header from "../src/componants/Header/header";
import Footer from "../src/componants/Footer/index";
import ContextProvider from "../Context/Context";
import ContextProviderform from "../Context/Contextform";
function MyApp({ Component, pageProps, router }) {
  return (
    <div>
      <ContextProvider>
        <ContextProviderform>
          <Header />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>

          <Footer />
        </ContextProviderform>
      </ContextProvider>
    </div>
  );
}

export default MyApp;
//  <ApolloProvider client={client}>
// </ApolloProvider>
