import { RiCheckboxCircleFill } from "@remixicon/react";

export default function CapabilitySection() {
  return (
    <section
      id="capabilities"
      className="mx-8 my-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      <div className="order-2 flex flex-col gap-6">
        <h1 className="font-semibold text-2xl ">
          We Create Your Home More Aesthetic
        </h1>
        <p className="text-sm">
          Furnitre power is a software as services for multiperpose business
          management system,
        </p>
        <ul
          id="capability-list"
          aria-label="Our capabilites"
          className="flex flex-col gap-8"
        >
          <li className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto] gap-4 items-center">
            <RiCheckboxCircleFill size={24} />
            <h2 className="font-semibold text-base">Valuation Services</h2>
            <p className="col-start-2 text-sm">
              Sometimes features require a short description. This can be
              detailed description
            </p>
          </li>
          <li className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto] gap-4 items-center">
            <RiCheckboxCircleFill size={24} />
            <h2 className="font-semibold text-base">
              Development of Furniture Models
            </h2>
            <p className="col-start-2 text-sm">
              Sometimes features require a short description. This can be
              detailed description
            </p>
          </li>
        </ul>
      </div>
      <img
        className="order-last md:order-1 aspect-[1.4] md:aspect-[1.4] object-cover rounded-lg"
        src="https://ik.imagekit.io/lumoshiveAcademy/Furniture/chair.webp"
      />
    </section>
  );
}
