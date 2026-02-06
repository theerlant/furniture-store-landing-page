import image from "../assets/best-image.png";

export default function BestSection() {
  return (
    <section
      id="best"
      className="m-6 lg:m-8 md:mx-18 lg:mx-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch"
    >
      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-2xl lg:text-[40px] lg:py-8">
          The Best Furniture Manufacturer of your choice
        </h1>
        <p className="text-sm lg:text-base">
          Furnitre power is a software as services for multiperpose business
          management system, expecially for them who are running two or more
          business exploree the future Furnitre power is a software as services.
        </p>
      </div>
      <img
        className="aspect-[1.4] md:aspect-[1.4] object-cover rounded-lg"
        src={image}
      />
    </section>
  );
}
