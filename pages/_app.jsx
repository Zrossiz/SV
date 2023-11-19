import { useRouter } from "next/router";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";

import "../styles/globals.css";
import Layout from "../components/Layout";
import Transition from "../components/Transition";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>Портфолио</title>
        <link type="image/x-icon" rel="icon" href="/bulb.png" />
      </Head>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
