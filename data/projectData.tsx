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
    name: "Gemini Quest",
    image:
      "https://i.ibb.co/N2Z79Rvs/Screen-Shot-2025-06-11-at-12-46-24-PM.png",
    links: "https://gemini-quest.netlify.app/",
  },
  {
    name: "Constructor Real State",
    image: "https://i.ibb.co/1JKBNQVv/real-estate.png",
    links: "https://real-estate-constructor.vercel.app/",
  },
  {
    name: "Bitcoin Chatbot",
    image: "https://i.ibb.co/Kc22Gzmv/bitcoin-chatbot.png",
    links: "https://bitcoin-chatbot.netlify.app/",
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
