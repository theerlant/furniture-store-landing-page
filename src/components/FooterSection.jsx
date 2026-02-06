import { RiTwitterXFill } from "@remixicon/react";
import { RiThreadsFill } from "@remixicon/react";
import { RiGithubFill } from "@remixicon/react";
import { RiFacebookBoxFill } from "@remixicon/react";
import { RiInstagramLine } from "@remixicon/react";

export default function FooterSection() {
  return (
    <section
      id="footer"
      className="text-white bg-[#23262F] p-8 lg:p-12 px-6 md:px-18 lg:px-32 pb-6!"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4">
        <h1 className="text-2xl font-raleway font-bold">FurniShop</h1>
        <div
          id="contacts"
          className="flex *:shrink-0 justify-between lg:justify-end gap-4 text-sm"
        >
          <ContactButton>
            <RiInstagramLine size={20} aria-label="Instagram" />
          </ContactButton>
          <ContactButton>
            <RiFacebookBoxFill size={20} aria-label="Facebook" />
          </ContactButton>
          <ContactButton>
            <RiTwitterXFill size={20} aria-label="X" />
          </ContactButton>
          <ContactButton>
            <RiGithubFill size={20} aria-label="Github" />
          </ContactButton>
          <ContactButton>
            <RiThreadsFill size={20} aria-label="Threads" />
          </ContactButton>
        </div>
      </div>
      <div className="hidden lg:block w-full h-px my-8 bg-white/60" />
      <div className="grid grid-cols-2 lg:grid-cols-5 pt-8 gap-12">
        <FooterLinkList
          title={"Our Products"}
          links={["The Support Suite", "The Sales Suite", "Support", "Guide"]}
        />
        <FooterLinkList
          title={"Top Features"}
          links={[
            "Ticketing System",
            "Knowledge Base",
            "Community Forums",
            "Help Desk Software",
          ]}
        />
        <FooterLinkList
          title={"Resources"}
          links={[
            "Product Support",
            "Request Demo",
            "Library",
            "Peoplepower Blog",
          ]}
        />
        <FooterLinkList
          title={"Company"}
          links={["About Us", "Press", "Investors", "Events"]}
        />
        <FooterLinkList
          title={"Favourite Things"}
          links={[
            "For Enterprise",
            "For Startups",
            "For Benchmark",
            "For Small Business",
          ]}
        />
      </div>
      <FooterCopyright />
    </section>
  );
}

function ContactButton({ children }) {
  return (
    <div className="p-4 bg-white/10 hover:scale-105 cursor-pointer rounded-full">
      {children}
    </div>
  );
}

function FooterLinkList({ title, links }) {
  return (
    <div>
      <h2 className="mb-6 text-lg font-medium font-raleway">{title}</h2>
      <ul id={title} className="flex flex-col gap-4">
        {links.map((v, i) => (
          <li key={i} className="font-inter text-sm hover:underline">
            <a href="#contacts" key={i}>
              {v}
            </a>
          </li>
        ))}{" "}
      </ul>
    </div>
  );
}

function FooterCopyright() {
  return (
    <p className="font-inter text-xs lg:text-sm text-center pt-20">
      © NameBrand {new Date().getFullYear()} - All Rights Reserved
    </p>
  );
}
