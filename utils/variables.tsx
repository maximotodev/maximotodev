import gitlabIconSvg from "@/assets/icons/gitlab-logo.svg";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

export const gitlabIcon = (
  <Image priority width={24} height={24} src={gitlabIconSvg} alt="" />
);

export const socialLinks = {
  github: { name: "GitHub", link: "https://github.com/maximotodev/" },
  // gitlab: { name: "GitLab", link: "#" },
  // linkedin: {
  //   name: "LinkedIn",
  //   link: "https://www.linkedin.com/in/diego-aguero-90101322a/",
  // },
  // twitter: { name: "X(Twitter)", link: "https://twitter.com/maximotodev/" },
  nostr: {
    name: "Nostr",
    link: "https://snort.social/nprofile1qqsd2twjl8axqlnsmeh8h28tnj3wneel6dx7epz4tav4dj7rrxtpd8gprdmhxue69uhkummnw3ezummjv9hxwetsd9kxctnyv4mz7qgewaehxw309aex2mrp0yh8xmn0wf6zuum0vd5kzmp0qyt8wumn8ghj7etyv4hzumn0wd68ytnvv9hxgtc2a6r5v",
  },
  // bento: { name: "Bento", link: "https://bento.me/tom-y" },
};

export const experienceLinks = {
  ubora: {
    name: "Scrimba",
    link: "http:/scrimba.com",
  },
  kelden: {
    name: "KELDEN University Institute",
    link: "https://kelden.education/",
  },
};

export const logoContent = (
  <div
    style={{
      marginRight: 2,
      display: "flex",
      alignItems: "center",
      gap: 5,
    }}
  >
    {/* <span style={{ fontWeight: 700 }}>TOM• </span>{" "} */}
    <Image src={logo} alt="logo" priority width={150} />

    {/* <span className="portfolio">
      <span style={{ fontWeight: 700 }}> • </span> Portfolio
    </span> */}
  </div>
);
