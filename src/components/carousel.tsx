import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...settings} className="overflow-hidden">
      <div>
        <div
          className="w-screen h-screen"
          style={{ backgroundImage: "url(/images/slide-1.jpg)" }}
        >
          <div className="absolute sm:top-80 top-20 w-full">
            <div className="absolute w-full h-full bg-sky-700/70"></div>
            <h1 className="font-nino md:text-4xl text-2xl text-center text-neutral-100 relative p-5 w-3/4 m-auto leading-relaxed">
              უზრუნველყოფს შესანიშნავი ბეტონის ღობეების და ქვისა კედლების
              სისტემებს 33 წელზე მეტი ხნის განმავლობაში
            </h1>
          </div>
        </div>
      </div>
      <div>
        <div
          className="w-screen h-screen"
          style={{ backgroundImage: "url(/images/slide-2.jpg)" }}
        >
          <div className="absolute top-1/3 w-full">
            <div className="absolute w-full h-full bg-sky-700/70"></div>
            <h1 className="font-nino text-4xl text-center text-neutral-100 relative p-5 w-3/4 m-auto leading-relaxed">
              ემსახურება კომერციულ, საცხოვრებელ, სამთავრობო და არქიტექტურულ
              კლიენტებს.
            </h1>
          </div>
        </div>
      </div>
      <div>
        <div
          className="w-screen h-screen"
          style={{ backgroundImage: "url(/images/slide-3.jpg)" }}
        >
          <div className="absolute top-1/3 w-full">
            <div className="absolute w-full h-full bg-sky-700/70"></div>
            <h1 className="font-nino text-4xl text-center text-neutral-100 relative p-5 w-3/4 m-auto leading-relaxed">
              ჩვენ ვასრულებთ ყველა საწარმოო და სამონტაჟო პროცესს.
            </h1>
          </div>
        </div>
      </div>
      <div>
        <div
          className="w-screen h-screen"
          style={{ backgroundImage: "url(/images/slide-3.jpg)" }}
        >
          <div className="absolute top-1/3 w-full">
            <div className="absolute w-full h-full bg-sky-700/70"></div>
            <h1 className="font-nino text-4xl text-center text-neutral-100 relative p-5 w-3/4 m-auto leading-relaxed">
              ვუზრუნველვყოფთ უმაღლესი ხარისხის მასალებს და სამუშაოს
            </h1>
          </div>
        </div>
      </div>
    </Slider>
  );
}

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} shadow-md hover:shadow-lg`}
      style={{
        ...style,
        display: "block",
        right: 40,
        width: 70,
        height: 70,
        bottom: 50,
      }}
      onClick={onClick}
    >
      <img src="/icons/right-arrow.svg" className="rounded" />
    </div>
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} shadow-md hover:shadow-lg`}
      style={{
        ...style,
        display: "block",
        left: 20,
        width: 70,
        height: 70,
        zIndex: 10,
        bottom: 50,
      }}
      onClick={onClick}
    >
      <img src="/icons/left-arrow.svg" className="rounded" />
    </div>
  );
}
