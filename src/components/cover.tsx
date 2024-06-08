import { useEffect, useState } from "react";

interface CoverProps {
  title: string;
  imgSrc: string;
  bgPosition?: string;
}

const Cover = ({ imgSrc, title, bgPosition }: CoverProps) => {
  const [width, setWidth] = useState<number>();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const backgroundPosition =
    bgPosition && width && width > 768 ? bgPosition : "center";

  return (
    <div
      className="h-96 w-full bg-no-repeat bg-cover relative flex items-center justify-center bg-fixed"
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundPosition,
      }}
    >
      <div className="absolute w-full h-full bg-black opacity-30"></div>
      <h1 className="font-nino text-5xl text-c-yellow z-10">{title}</h1>
    </div>
  );
};

export default Cover;
