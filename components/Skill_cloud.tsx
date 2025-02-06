import React from "react";
import {
  Cloud,
  ICloud,
  fetchSimpleIcons,
  renderSimpleIcon,
} from "react-icon-cloud";

const useIcons = (slugs: string[]) => {
  const [icons, setIcons] = React.useState<any>(null);
  React.useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setIcons);
  }, []);

  if (icons) {
    return Object.values(icons.simpleIcons).map((icon) =>
      renderSimpleIcon({
        icon,
        size: 42,
        aProps: {
          onClick: (e: any) => e.preventDefault(),
        },
      })
    );
  }
  return <a>Loading...</a>;
};

const slugs = [
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "postgresql",
  "nginx",
  "vercel",
  "canva",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
  "python",
  "django",
  "javascript",
  "typescript",
  "mongodb",
  "sqlite",
  "mysql",
  "nextdotjs",
  "leaflet",
  "redis",
  "materialui",
  "bootstrap",
  "jenkins",
  "adobe",
  "adobephotoshop",
  "adobeillustrator",
];

/**
 * * get the tech list from the cloud-icons
 */
let tab = "";
slugs.forEach((tech) => {
  tab += `
    {
      name: "${tech}",
      icon:"",
      dot:"#fff",
      starred: false
    },
  `;
});
// console.log(tab);

const cloudProps: Omit<ICloud, "children"> = {
  id: "stable-id-for-csr-ssr",
  containerProps: {
    style: {
      backgroundColor: "#d1dae3",
      borderRadius: "80%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 40,
      marginRight: 40,
    },
  },
  canvasProps: {
    style: {
      maxWidth: "80%",
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#00000",
  },
};

const Skill_cloud = () => {
  const icons = useIcons(slugs);

  return (
    <Cloud {...cloudProps}>
      {icons} <span></span>
    </Cloud>
  );
};

export default Skill_cloud;
