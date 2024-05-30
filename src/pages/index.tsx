import Carousel from "@/components/carousel";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="w-screen h-screen">
        <div>
          <div className="sm:w-96 w-80 absolute sm:bottom-96 bottom-52 inset-x-2/4 -translate-x-1/2 z-10 rounded-2xl	">
            <div className="absolute w-full h-full bg-black opacity-70 rounded-2xl"></div>
            <div
              className={`text-white relative text-center p-3 rounded sm:text-4xl text-3xl`}
            >
              (+995) 555 654 555
            </div>
          </div>
          <Carousel />
        </div>
      </div>
      <p className="w-1">as</p>
    </div>
  );
}
