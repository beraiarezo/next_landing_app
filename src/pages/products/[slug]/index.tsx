import Cover from "@/components/cover";
import CoverImg from "../../../../public/images/op1.jpg";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <section>
      <Cover imgSrc={CoverImg.src} title="პროდუქცია" />

      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 gap-4">hello</div>
      </div>
    </section>
  );
}
