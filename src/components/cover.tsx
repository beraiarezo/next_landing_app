interface CoverProps {
  title: string;
  imgSrc: string;
  bgPosition?: string;
}

const Cover = ({ imgSrc, title, bgPosition }: CoverProps) => {
  return (
    <div
      className="h-96 w-full bg-no-repeat bg-cover relative flex items-center justify-center bg-fixed"
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundPosition: `${bgPosition ? bgPosition : "center"}`,
      }}
    >
      <div className="absolute w-full h-full bg-black opacity-30"></div>
      <h1 className="font-nino text-5xl text-c-yellow z-10">{title}</h1>
    </div>
  );
};

export default Cover;
