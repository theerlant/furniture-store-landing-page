import { useForm } from "react-hook-form";
import bg from "../assets/newsletter-image.jpg";
import { useState } from "react";

export default function NewsLetterSection() {
  // use library react-hook-form for easy input validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit", // validity check only on submit
  });

  const [msg, setMsg] = useState("");

  const onFormSubmit = (data) => {
    setMsg("You have been subscribed");
    setTimeout(() => setMsg(""), 3000);
  };

  return (
    <section
      id="newsletter"
      className="flex flex-col gap-6 lg:gap-8 text-white p-6 py-10 md:py-12 lg:py-36 xl:py-48 md:px-18 lg:px-32 lg:pl-[50%] text-center lg:text-left lg:bg-cover bg-size-[140%_auto] bg-right lg:bg-center "
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <h1 className="text-2xl lg:text-[40px] font-semibold">
        {" "}
        Get more discount off your order
      </h1>
      <p className="text-sm lg:text-[20px]">Join our mailing list</p>
      <div className="flex">
        <form
          className="w-full flex gap-4"
          onSubmit={handleSubmit(onFormSubmit)}
        >
          <input
            className="flex-1 bg-white outline-0 focus:ring-2 focus:ring-black/20 rounded-lg p-3 px-6 text-black placeholder:text-black/60 text-xs lg:text-base"
            placeholder="Your email address"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          <button
            type="submit"
            className="text-center p-3 px-6 bg-[#23262F] rounded-lg"
          >
            Subscribe
          </button>
        </form>
      </div>
      {errors.email ? (
        <div className="bg-red-500/50 border border-red-400 p-1 rounded-lg">
          {errors.email.message}
        </div>
      ) : null}
      {msg ? (
        <div className="bg-green-500/40 border border-green-400 p-1 rounded-lg">
          {msg}
        </div>
      ) : null}
    </section>
  );
}
