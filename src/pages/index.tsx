import Carousel from "@/components/carousel";
import { useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { img1, img2, img3, img4 } from "@/assets/images";
import Link from "next/link";

import leftIcon from "../../public/icons/left.svg";

export default function Home() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1 });
    }
  }, [isInView]);

  return (
    <div className="overflow-hidden">
      <div className="w-screen h-screen">
        <div>
          <div className="sm:w-96 w-80 absolute sm:bottom-96 bottom-52 inset-x-2/4 -translate-x-1/2 z-10 rounded-2xl	"></div>
          <Carousel />
        </div>
      </div>
      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.1 }}
        transition={{
          duration: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="w-full h-20 mt-10 mb-10 flex items-center justify-center"
        ref={scope}
      >
        <h1 className="text-5xl text-c-purple pb-5 border-c-yellow border-b-2 font-nino">
          ასაწყობი ბეტონი
        </h1>
      </motion.div>
      <div>
        <div className="flex">
          <motion.div
            whileInView={{ y: 0 }}
            initial={{ y: 300 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="relative border-4 border-yellow-400 mr-2.5 ml-2.5 rounded"
          >
            <div className="absolute w-full h-full bg-black opacity-50"></div>
            <div className="absolute flex w-full h-full items-center justify-between flex-col">
              <h2 className="text-c-yellow text-3xl font-nino mt-10 text-center">
                კომერციული გამოყენება
              </h2>
              <p className="text-white text-center font-glaho text-xl p-5 leading-loose">
                კომერციული წინასწარ ჩამოსხმული ბეტონის ღობეები
              </p>
              <Link
                href="/"
                className="text-white mb-10 bg-c-purple
                 hover:bg-c-yellow font-glaho rounded-md p-5 flex items-center"
              >
                დეტალურად
                <span
                  className="flex w-5 h-5 bg-contain bg-no-repeat bg-center ml-2"
                  style={{ backgroundImage: `url(${leftIcon.src})` }}
                ></span>
              </Link>
            </div>
            <img src={img1.src} alt="" />
          </motion.div>
          <motion.div
            whileInView={{ y: 0 }}
            initial={{ y: 300 }}
            transition={{
              duration: 1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="relative border-4 border-yellow-400 mr-2.5 ml-2.5 rounded"
          >
            <div className="absolute w-full h-full bg-black opacity-50"></div>
            <div className="absolute flex w-full h-full items-center justify-between flex-col">
              <h2 className="text-c-yellow text-3xl font-nino mt-10 text-center">
                სამთავრობო გამოყენება
              </h2>
              <p className="text-white text-center font-glaho text-xl">
                ჩვენი პროდუქცია სამთავრობო პროექტებისთვის
              </p>
              <Link
                href="/"
                className="text-white mb-10 hover:bg-c-yellow bg-c-purple font-glaho rounded-md p-5 flex items-center"
              >
                დეტალურად
                <span
                  className="flex w-5 h-5 bg-contain bg-no-repeat bg-center ml-2"
                  style={{ backgroundImage: `url(${leftIcon.src})` }}
                ></span>
              </Link>
            </div>
            <img src={img2.src} alt="" />
          </motion.div>
          <motion.div
            whileInView={{ y: 0 }}
            initial={{ y: 300 }}
            transition={{
              duration: 1.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="relative border-4 border-yellow-400 mr-2.5 ml-2.5 rounded"
          >
            <div className="absolute w-full h-full bg-black opacity-50"></div>
            <div className="absolute flex w-full h-full items-center justify-between flex-col">
              <h2 className="text-c-yellow text-3xl font-nino mt-10 text-center">
                საცხოვრებელი გამოყენება
              </h2>
              <p className="text-white text-center font-glaho text-xl">
                საცხოვრებელი წინასწარ ჩამოსხმული ბეტონის ღობეები
              </p>
              <Link
                href="/"
                className="text-white mb-10 hover:bg-c-yellow bg-c-purple font-glaho rounded-md p-5 flex items-center"
              >
                დეტალურად
                <span
                  className="flex w-5 h-5 bg-contain bg-no-repeat bg-center ml-2"
                  style={{ backgroundImage: `url(${leftIcon.src})` }}
                ></span>
              </Link>
            </div>
            <img src={img3.src} alt="" />
          </motion.div>
          <motion.div
            whileInView={{ y: 0 }}
            initial={{ y: 300 }}
            transition={{
              duration: 2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="relative border-4 border-yellow-400 mr-2.5 ml-2.5 rounded"
          >
            <div className="absolute w-full h-full bg-black opacity-50"></div>
            <div className="absolute flex w-full h-full items-center justify-between flex-col">
              <h2 className="text-c-yellow text-3xl font-nino mt-10 text-center">
                არქიტექტურული გამოყენება
              </h2>
              <p className="text-white text-center font-glaho text-xl">
                წინასწარ ჩამოსხმული ბეტონის ღობეები, პროდუქტი და სერვისები
              </p>
              <Link
                href="/"
                className="text-white mb-10 hover:bg-c-yellow bg-c-purple font-glaho rounded-md flex items-center p-5"
              >
                დეტალურად
                <span
                  className="flex w-5 h-5 bg-contain bg-no-repeat bg-center ml-2"
                  style={{ backgroundImage: `url(${leftIcon.src})` }}
                ></span>
              </Link>
            </div>
            <img src={img4.src} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
