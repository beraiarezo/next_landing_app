import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import { motion, useScroll } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div style={{ scaleX: scrollYProgress }}></motion.div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
