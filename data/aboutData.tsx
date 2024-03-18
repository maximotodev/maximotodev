import {
  BusinessCenterOutlined,
  GitHub,
  LinkedIn,
  Phonelink,
  SchoolOutlined,
  Twitter,
} from "@mui/icons-material";
import { experienceLinks, gitlabIcon, socialLinks } from "../utils/variables";
import profilePic from "@/assets/images/profilePic.png";
import { DataObject, Code } from "@mui/icons-material";
import Link from "next/link";

export const aboutInfo = {
  number: "I",
  name: "Maximoto",
  description: (
    <>
      I am a fullstack developer and bitcoin maximalist. I like to work with software and computers.
    </>
  ),
  socials: [
    {
      id: 1,
      name: socialLinks.linkedin.name,
      href: socialLinks.linkedin.name,
      icon: <LinkedIn />,
      color: "",
    },
    {
      id: 2,
      name: socialLinks.twitter.name,
      href: socialLinks.twitter.link,
      icon: <Twitter />,
      color: "",
    },
    {
      id: 3,
      name: socialLinks.github.name,
      href: socialLinks.github.link,
      icon: <GitHub />,
      color: "",
    },
    {
      id: 4,
      name: socialLinks.gitlab.name,
      href: socialLinks.gitlab.link,
      icon: gitlabIcon,
      color: "",
    },
  ],
  profilePic: profilePic,
};

export const experiences = [
  {
    id: "1",
    year: 2021,
    exp: [
      {
        icon: <DataObject fontSize="small" />,
        title: "Frontend Developer Apprentice",
        dec: (
          <>At scrimba</>
        ),
      },
      {
        icon: <Code fontSize="small" />,
        title: "Freelance Web & Mobile Dev",
        dec: (
          <>
            Web app developer.
          </>
        ),
      },
    ],
  },
  {
    id: "2",
    year: 2022,
    exp: [
      {
        icon: <DataObject fontSize="small" />,
        title: "Fullstack Developer Apprentice",
        dec: (
          <>
            At{" "} {experienceLinks.ubora.name} and codecademy
          </>
        ),
      },
      {
        icon: <BusinessCenterOutlined fontSize="small" />,
        title: "Freelancer & UI Designer",
        dec: (
          <>
            Web/Mobile App, UI Design & API.
          </>
        ),
      },
    ],
  },
  {
    id: "3",
    year: 2023,
    exp: [
      {
        icon: <SchoolOutlined fontSize="small" />,
        title: "HarvardX's Computer Science for Web Programming",
        dec: (
          <>
            Software Engineering & Algorithms at CS50's Introduction to Computer Science.
          </>
        ),
      },
      {
        icon: <Phonelink fontSize="small" />,
        title: "Fullstack Developer",
        dec: (
          <>
            At{" "}TBA
          </>
        ),
      },
      {
        icon: <BusinessCenterOutlined fontSize="small" />,
        title: "Freelancer & UI Designer",
        dec: (
          <>
            Professional Web/Mobile App, UI Design.
          </>
        ),
      },
    ],
  },
];
