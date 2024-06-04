import CoverImg from "../../../public/images/op1.jpg";
import Cover1 from "../../../public/images/background-element-1.jpg";

export default function about() {
  return (
    <section>
      <div
        className="h-96 w-full bg-no-repeat bg-cover relative bg-center flex items-center justify-center bg-fixed"
        style={{ backgroundImage: `url(${CoverImg.src})` }}
      >
        <div className="absolute w-full h-full bg-black opacity-30"></div>
        <h1 className="font-nino text-5xl text-c-yellow z-10">ჩვენ შესახებ</h1>
      </div>
      <div
        className="w-full h-4/6	 relative flex flex-row justify-center p-10"
        style={{ backgroundImage: `url(${Cover1.src})` }}
      >
        <div className="max-w-screen-xl flex">
          <div className="flex flex-col items-center justify-center w-1/2 ">
            <h1 className="font-nino text-4xl text-center mt-10">
              ბეტონის ღობის და კედლების სისტემები
            </h1>
            <h3 className="font-glaho text-3xl p-5 text-center">
              დადასტურებული სილამაზე და ხარისხი!
            </h3>
            <p className="font-glaho text-xl p-5 text-center">
              ჩვენი ყურადღება გამახვილებულია მომხმარებელზე და ჩვენ ვცდილობთ
              მივაწოდოთ შესანიშნავი მომსახურება ყველა კლიენტს. არ აქვს
              მნიშვნელობა დავალებას, ჩვენი მიზანია ყოველთვის მივიღოთ უმაღლესი
              ხარისხის სტანდარტები, რათა დავაკმაყოფილოთ და გადავაჭარბოთ
              მომხმარებლის მოლოდინს.
            </p>
          </div>
          <div className="flex w-1/2 justify-center">
            <img src={CoverImg.src} alt="" className="rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
}
