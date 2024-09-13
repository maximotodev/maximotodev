import drfImg from "../assets/icons/drf.png";
import gitlabCiCd from "../assets/icons/gitlab-ci-cd.png";
import { Code, Layers, Settings, Storage } from "@mui/icons-material";
import { renderSimpleIcon } from "react-icon-cloud";
import {
  siAdobeillustrator,
  siAdobephotoshop,
  siBootstrap,
  siCanva,
  siDjango,
  siDocker,
  siFigma,
  siFlutter,
  siGithub,
  siGitlab,
  siJavascript,
  siJenkins,
  siJira,
  siMongodb,
  siMui,
  siMysql,
  siNextdotjs,
  siNginx,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siRedis,
  siSqlite,
  siTrello,
  siTypescript,
  siVercel,
  siVisualstudiocode,
} from "simple-icons";

const getIcons = (slugs: any[]) => {
  const icons = slugs.map((icon) => {
    return renderSimpleIcon({
      icon,
      size: 42,
      aProps: { onClick: (e: any) => e.preventDefault() },
    });
  });
  return icons;
};

const backend = [
  {
    name: "python",
    icon: getIcons([siPython]),
    dot: "#fff",
    starred: false,
    img: "",
  },
  {
    name: "nodejs",
    icon: getIcons([siNodedotjs]),
    dot: "#fff",
    starred: false,
    img: "",
  },
  // {
  //   name: "Django rest",
  //   icon: getIcons([siDjango]),
  //   dot: "#fff",
  //   starred: false,
  //   img: drfImg,
  // },
  {
    name: "Redis",
    icon: getIcons([siRedis]),
    dot: "#fff",
    starred: false,
    img: "",
  },
];
const frontend = [
  // {
  //   name: "Flutter Dart",
  //   icon: getIcons([siFlutter]),
  //   dot: "#fff",
  //   starred: false,
  //   img: "",
  // },
  {
    name: "ReactJS",
    icon: getIcons([siReact]),
    dot: "#fff",
    starred: false,
    img: "",
  },
  {
    name: "NextJS",
    icon: getIcons([siNextdotjs]),
    dot: "#fff",
    starred: false,
    img: "",
  },
  {
    name: "materialui",
    icon: getIcons([siMui]),
    dot: "#fff",
    starred: false,
    img: "",
  },

  {
    name: "bootstrap",
    icon: getIcons([siBootstrap]),
    dot: "#fff",
    starred: false,
    img: "",
  },
  {
    name: "Javascript",
    icon: getIcons([siJavascript]),
    dot: "#fff",
    starred: false,
    img: "",
  },
  {
    name: "typescript",
    icon: getIcons([siTypescript]),
    dot: "#fff",
    starred: false,
    img: "",
  },
  {
    name: "figma",
    icon: getIcons([siFigma]),
    dot: "#fff",
    starred: false,
    img: "",
  },
  {
    name: "canva",
    icon: getIcons([siCanva]),
    dot: "#fff",
    starred: false,
    img: "",
  },
  // {
  //   name: "photoshop",
  //   icon: getIcons([siAdobephotoshop]),
  //   dot: "#fff",
  //   starred: false,
  //   img: "",
  // },
  {
    name: "illustrator",
    icon: getIcons([siAdobeillustrator]),
    dot: "#fff",
    starred: false,
    img: "",
  },
];
const deployment = [
  {
    name: "docker",
    icon: getIcons([siDocker]),
    dot: "#fff",
    starred: false,
    img: "",
  },
  {
    name: "jenkins",
    icon: getIcons([siJenkins]),
    dot: "#fff",
    starred: false,
    img: "",
  },
  {
    name: "nginx",
    icon: getIcons([siNginx]),
    dot: "#fff",
    starred: false,
    img: "",
  },
  {
    name: "vercel",
    icon: getIcons([siVercel]),
    dot: "#fff",
    starred: false,
    img: "",
  },
  {
    name: "",
    icon: getIcons([siGitlab]),
    dot: "#fff",
    starred: false,
    img: gitlabCiCd,
  },
];
const other = [
  {
    name: "mysql",
    icon: getIcons([siMysql]),
    dot: "#fff",
    starred: false,
    img: "",
  },
  {
    name: "sqlite",
    icon: getIcons([siSqlite]),
    dot: "#fff",
    starred: false,
    img: "",
  },
  {
    name: "postgresql",
    icon: getIcons([siPostgresql]),
    dot: "#fff",
    starred: false,
    img: "",
  },
  {
    name: "mongodb",
    icon: getIcons([siMongodb]),
    dot: "#fff",
    starred: false,
    img: "",
  },
  // {
  //   name: "jira",
  //   icon: getIcons([siJira]),
  //   dot: "#fff",
  //   starred: false,
  //   img: "",
  // },
  // {
  //   name: "Trello",
  //   icon: getIcons([siTrello]),
  //   dot: "#fff",
  //   starred: false,
  //   img: "",
  // },
  {
    name: "github",
    icon: getIcons([siGithub]),
    dot: "#fff",
    starred: false,
    img: "",
  },
  {
    name: "gitlab",
    icon: getIcons([siGitlab]),
    dot: "#fff",
    starred: false,
    img: "",
  },
  {
    name: "vs code",
    icon: getIcons([siVisualstudiocode]),
    dot: "#fff",
    starred: false,
    img: "",
  },
];

export const skillsData = {
  title: "Skills/Stack",
  number: "IV",
  description: (
    <>
      I use the technologies and frameworks listed below to build professional
      applications and mockups.
    </>
  ),
  stack: [
    {
      name: "Frontend",
      icon: <Code />,
      desc: "frontend stack",
      tech: frontend,
    },
    {
      name: "Backend",
      icon: <Settings />,
      desc: "backend stack",
      tech: backend,
    },
    {
      name: "Deployment",
      icon: <Storage />,
      desc: "deployment stack",
      tech: deployment,
    },
    {
      name: "Others",
      icon: <Layers />,
      desc: "other stack",
      tech: other,
    },
  ],
};
