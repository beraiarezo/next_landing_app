import Cover from "@/components/cover";
import CoverImg from "../../../public/images/89.jpg";
import PotImg from "../../../public/images/pot.jpg";
import PotImg1 from "../../../public/images/Pot1.jpg";
import MainBg from "../../../public/images/bg22.jpg";
import Link from "next/link";
import leftIcon from "../../../public/icons/left.svg";

const productList = [
  {
    src: PotImg.src,
    title: "პროდუქტი ერთი",
  },
  {
    src: PotImg1.src,
    title: "პროდუქტი ერთი",
  },
  {
    src: PotImg1.src,
    title: "პროდუქტი ერთი",
  },
  {
    src: PotImg.src,
    title: "პროდუქტი ერთი",
  },
];

const Product = ({ src, title }: any) => {
  return (
    <Link href={"/"}>
      <div
        className="group overflow-hidden rounded-md shadow-xl hover:cursor-pointer border-4
    "
      >
        <h3
          className="mb-5 text-2xl font-nino mt-5 text-left pl-3 bg-no-repeat"
          style={{
            backgroundImage: `url(${leftIcon.src})`,
            backgroundPosition: "98% center",
          }}
        >
          {title}
        </h3>
        <div className="overflow-hidden">
          <img
            src={src}
            className="transition-transform duration-300 group-hover:scale-110 w-full"
            alt={title}
          />
        </div>
      </div>
    </Link>
  );
};

export default function Products() {
  return (
    <section>
      <Cover imgSrc={CoverImg.src} title="პროდუქცია" bgPosition="0 -300px" />
      <div style={{ backgroundImage: `url(${MainBg.src})` }}>
        <div className="max-w-screen-xl mx-auto px-4 py-8">
          <div className="grid sm:grid-cols-2 gap-4">
            {productList.map((product, index) => (
              <Product src={product.src} title={product.title} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
