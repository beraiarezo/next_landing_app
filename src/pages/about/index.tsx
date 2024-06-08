import CoverImg from "../../../public/images/op1.jpg";
import Cover1 from "../../../public/images/background-element-1.jpg";
import Cover2 from "../../../public/images/222.jpg";

import Cover from "@/components/cover";

export async function getStaticProps() {
  console.log("SSR: getServerSideProps called");
  return {
    props: { data: 1 },
  };
}

export default function about({ data }: any) {
  return (
    <section>
      <Cover imgSrc={CoverImg.src} title="ჩვენ შესახებ" />
      <div
        className="w-full h-4/6	 relative flex flex-row justify-center xl:p-10 p-5"
        style={{ backgroundImage: `url(${Cover1.src})` }}
      >
        <div className="max-w-screen-xl flex xl:flex-row flex-col">
          <div className="flex flex-col items-center justify-center xl:w-1/2  w-full">
            <h1 className="font-nino xl:text-4xl text-3xl text-center mt-10">
              ბეტონის ღობის და კედლების სისტემები
            </h1>
            <h3 className="font-glaho xl:text-3xl text-2xl p-5 text-center">
              დადასტურებული სილამაზე და ხარისხი!
            </h3>
            <p className="font-glaho sm:text-xl text-sm p-5 text-center">
              ჩვენი ყურადღება გამახვილებულია მომხმარებელზე და ჩვენ ვცდილობთ
              მივაწოდოთ შესანიშნავი მომსახურება ყველა კლიენტს. არ აქვს
              მნიშვნელობა დავალებას, ჩვენი მიზანია ყოველთვის მივიღოთ უმაღლესი
              ხარისხის სტანდარტები, რათა დავაკმაყოფილოთ და გადავაჭარბოთ
              მომხმარებლის მოლოდინს.
            </p>
          </div>
          <div className="flex xl:w-1/2 w-full justify-center">
            <img src={Cover2.src} alt="" className="rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
}
