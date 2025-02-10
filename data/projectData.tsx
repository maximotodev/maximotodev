import profilePic from "@/assets/images/profilePic.png";
import { socialLinks } from "@/utils/variables";
import Link from "next/link";

export const projectData = [
  {
    name: "Tribev2 - Publicly Auditable Cooperatives on Bitcoin",
    image: "https://i.ibb.co/Mk1C1gnP/tribev2.png",
    links: "https://tribev2.vercel.app/",
  },
  {
    name: "Mia Reynolds Official Website",
    image: "https://i.ibb.co/twDgyR0B/projects-mia-reynolds.png",
    links: "https://miareynolds.vercel.app/",
  },
  {
    name: "Constructor: Real Estate",
    image: "https://i.ibb.co/1JKBNQVv/real-estate.png",
    links: "https://real-estate-constructor.vercel.app/",
  },
  {
    name: "Constructor: Real Estate",
    image: "https://i.ibb.co/1JKBNQVv/real-estate.png",
    links: "https://real-estate-constructor.vercel.app/",
  },
  {
    name: "Constructor: Real Estate",
    image: "https://i.ibb.co/1JKBNQVv/real-estate.png",
    links: "https://real-estate-constructor.vercel.app/",
  },
];

export const projectInfo = {
  title: "Projects",
  number: "II",
  description: (
    <>
      I have worked and participated on many projects: personal, freelance and
      enterprise. The recents projects are listed below and others can be found
      on my{" "}
      <Link href={socialLinks.github.link} target="_blank" className="textP">
        {socialLinks.github.name}
      </Link>
    </>
  ),
};
