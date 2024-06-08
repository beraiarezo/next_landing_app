import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import leftArr from "../../public/icons/left-arrow.svg";
import rightArr from "../../public/icons/right-arrow.svg";

const Slides = [
  {
    title:
      "უზრუნველყოფს შესანიშნავი ბეტონის ღობეების და ქვისა კედლების სისტემებს 33 წელზე მეტი ხნის განმავლობაში",
    img: "/images/slide-1.jpg",
  },
  {
    title:
      "ემსახურება კომერციულ, საცხოვრებელ, სამთავრობო და არქიტექტურულ კლიენტებს.",
    img: "/images/slide-2.jpg",
  },
  {
    title: "ჩვენ ვასრულებთ ყველა საწარმოო და სამონტაჟო პროცესს.",
    img: "/images/slide-3.jpg",
  },
];

export default function Carousel() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...settings} className="overflow-hidden">
      {Slides.map((slide, index) => (
        <div key={index}>
          <div
            className="w-screen h-screen bg-cover"
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <div className="absolute sm:top-96 top-36 w-full">
              <div className="absolute w-full h-full bg-sky-700/70"></div>
              <h1 className=" md:text-4xl text-2xl text-center text-neutral-100 relative p-5 w-3/4 m-auto leading-relaxed">
                {slide.title}
              </h1>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`block shadow-md hover:shadow-lg ${className} z-10 sm:!w-16 sm:!h-16 !w-10 !h-10 
       xl:!right-16 !right-5 !bottom-16`}
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <img src={rightArr.src} className="rounded" />
    </div>
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} shadow-md hover:shadow-lg z-10 sm:!w-16 sm:!h-16 !w-10 !h-10 
      xl:!left-16 !left-5 !bottom-16`}
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <img src={leftArr.src} className="rounded" />
    </div>
  );
}
