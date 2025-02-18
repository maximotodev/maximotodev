import profilePic from "@/assets/images/profilePic.png";
import { socialLinks } from "@/utils/variables";
import Link from "next/link";

export const projectData = [
  {
    name: "Tribev2",
    image: "https://i.ibb.co/Mk1C1gnP/tribev2.png",
    links: "https://tribev2.vercel.app/",
  },
  {
    name: "Mia Reynolds Website",
    image: "https://i.ibb.co/twDgyR0B/projects-mia-reynolds.png",
    links: "https://miareynolds.vercel.app/",
  },
  {
    name: "Alyssa Grey",
    image: "https://i.ibb.co/1fzJGDQm/Screen-Shot-2025-02-17-at-8-14-01-PM.png",
    links: "https://alyssagrey-dev.vercel.app/",
  },
  {
    name: "Constructor Real State",
    image: "https://i.ibb.co/1JKBNQVv/real-estate.png",
    links: "https://real-estate-constructor.vercel.app/",
  },
  {
    name: "Constructor Real State",
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
