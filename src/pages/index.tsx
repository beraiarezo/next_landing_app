import Carousel from "@/components/carousel";
import { img1, img2, img3, img4 } from "@/assets/images";
import Link from "next/link";
import leftIcon from "../../public/icons/left.svg";
import Head from "next/head";

type TCategory = {
  title: string;
  description: string;
  url: string;
  img: string;
};

const Categories = [
  {
    title: "კომერციული გამოყენება",
    description: "კომერციული წინასწარ ჩამოსხმული ბეტონის ღობეები",
    url: "/",
    img: img1.src,
  },
  {
    title: "სამთავრობო გამოყენება",
    description: "ჩვენი პროდუქცია სამთავრობო პროექტებისთვის",
    url: "/",
    img: img2.src,
  },
  {
    title: "საცხოვრებელი გამოყენება",
    description: "საცხოვრებელი წინასწარ ჩამოსხმული ბეტონის ღობეები",
    url: "/",
    img: img3.src,
  },
  {
    title: "არქიტექტურული გამოყენება",
    description: "წინასწარ ჩამოსხმული ბეტონის ღობეები, პროდუქტი და სერვისები",
    url: "/",
    img: img4.src,
  },
];

const ProductCategory = ({ title, description, url, img }: TCategory) => {
  return (
    <div className="relative border-4 border-yellow-400 mr-2.5 ml-2.5 rounded lg:mt-0 mt-10 mx-auto w-full md:w-1/2 lg:w-auto">
      <div className="absolute w-full h-full bg-black opacity-50"></div>
      <div className="absolute flex w-full h-full items-center justify-between flex-col">
        <h2 className="text-c-yellow text-2xl font-nino mt-10 text-center xl:text-3xl">
          {title}
        </h2>
        <p className="text-white text-center font-glaho text-xl p-5 leading-loose">
          {description}
        </p>
        <Link
          href={url}
          className="text-white mb-10 bg-c-purple
         hover:bg-c-yellow font-glaho rounded-md p-5 flex items-center"
        >
          გალერეა
          <span
            className="flex w-5 h-5 bg-contain bg-no-repeat bg-center ml-2"
            style={{ backgroundImage: `url(${leftIcon.src})` }}
          ></span>
        </Link>
      </div>
      <img src={img} alt={title} />
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default function Home({}) {
  return (
    <>
      <Head>
        <title>My Page Title</title>
        <meta
          name="description"
          content="This is the description of my page."
        />
      </Head>
      <div className="overflow-hidden">
        <div className="w-screen h-screen">
          <div>
            <div className="sm:w-96 w-80 absolute sm:bottom-96 bottom-52 inset-x-2/4 -translate-x-1/2 z-10 rounded-2xl	"></div>
            <Carousel />
          </div>
        </div>
        <div className="w-full h-20 mt-10 mb-10 flex items-center justify-center">
          <h1 className="xl:text-5xl text-3xl text-c-purple pb-5 border-c-yellow border-b-2 font-nino">
            ასაწყობი ბეტონი
          </h1>
        </div>
        <div className="lg:p-10 p-5 relative">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{ backgroundImage: "url(images/bg22.jpg)" }}
          ></div>
          <div className="flex flex-col lg:flex-row items-center">
            {Categories.map((category, index) => (
              <ProductCategory
                title={category.title}
                img={category.img}
                description={category.description}
                url={category.url}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
