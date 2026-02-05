import image from "../assets/best-image.png";

export default function BestSection() {
  return (
    <section
      id="best"
      className="mx-8 my-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-2xl ">
          The Best Furniture Manufacturer of your choice
        </h1>
        <p className="text-sm">
          Furnitre power is a software as services for multiperpose business
          management system, expecially for them who are running two or more
          business exploree the future Furnitre power is a software as services
          \
        </p>
      </div>
      <img
        className="aspect-[1.4] md:aspect-[1.4] object-cover rounded-lg"
        src={image}
      />
    </section>
  );
}
