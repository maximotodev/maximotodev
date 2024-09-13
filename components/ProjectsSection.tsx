import { AccountTree, ArticleOutlined, GitHub } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  List,
  ListItemButton,
  Tooltip,
} from "@mui/material";
import Link from "next/link";

import profilePic from "@/assets/images/profilePic.jpeg";
import Image from "next/image";
import SectionTilte from "./SectionTitle";
import { gitlabIcon, socialLinks } from "@/utils/variables";
import { projectData, projectInfo } from "@/data/projectData";

const socialsGit = [
  {
    id: 1,
    name: socialLinks.github.name,
    href: socialLinks.github.link,
    icon: <GitHub />,
    color: "",
  },
  // {
  //   id: 2,
  //   name: socialLinks.gitlab.name,
  //   href: socialLinks.gitlab.link,
  //   icon: gitlabIcon,
  //   color: "",
  // },
];

const recentsProjects = projectData.slice(0, 5);
// console.log(recentsProjects)

const ProjectsSection = () => {
  return (
    <Box
      className="projects-section"
      sx={{ my: 5, px: { xs: 0, sm: 2 }, pr: { md: 4 } }}
    >
      <Grid
        container
        sx={{
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{ pt: { xs: 5, md: 0 }, pr: { xs: 0, md: 8 } }}
        >
          <div
            style={{
              fontSize: "1rem",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <h3 style={{ marginBottom: 0 }}>Recents Projects</h3>
            {projectData.length > recentsProjects.length && (
              <Link className="textP" href={"/projects"}>
                View all ({projectData.length})
              </Link>
            )}
          </div>
          <List>
            <Divider
              sx={{
                borderTop: "1px solid var(--foregroundColor)",
                opacity: 0.8,
              }}
            />
            {recentsProjects.map((project, index) => (
              <Link key={index} href={`projects/${project.slug}`}>
                <ListItemButton
                  sx={{
                    borderBottom: "1px solid var(--foregroundColor)",
                    py: 0,
                    px: 0,
                    textTransform: "uppercase",
                    fontSize: "1.2rem",
                    opacity: 0.8,
                    ":hover": {
                      opacity: 1,
                    },
                    ":hover span": {
                      opacity: 1,
                      color: "var(--primaryColor)",
                      transition: "0.3s",
                      transform: "translateX(20px)",
                    },
                    "span, img": { transition: "0.3s" },
                    display: "flex",
                    justifyContent: "space-between",
                    overflow: "hidden",
                    height: 100,

                    ".imagePro": {
                      position: "relative",
                      height: 100,
                      width: 150,
                      overflow: "hidden",
                      transition: "0.3s",
                      bottom: -110,

                      display: { xs: "none", sm: "flex" },
                    },
                    ":hover .imagePro": {
                      overflow: "hidden",
                      transition: "0.3s",
                      bottom: 0,
                    },
                    ".imagePro img": {
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    },
                  }}
                >
                  <span>{project.name}</span>
                  <div className="imagePro">
                    <Image
                      src={`/projects/${project.slug}/banner.png`}
                      width={150}
                      height={100}
                      priority
                      alt=""
                    />
                  </div>
                </ListItemButton>
              </Link>
            ))}
          </List>
        </Grid>
        <Grid sx={{ position: "relative", pl: { md: 4 } }} item xs={12} md={6}>
          <SectionTilte
            title={projectInfo.title}
            number={projectInfo.number}
            description={projectInfo.description}
          />
          <div className="pt-3">
            {socialsGit.map((social) => (
              <Tooltip key={social.id} title={social.name} arrow>
                <IconButton
                  sx={{ backgroundColor: "var(--cardBgColor)", mx: 0.5 }}
                  href={social.href}
                  target="_blank"
                >
                  {social.icon}
                </IconButton>
              </Tooltip>
            ))}
            {/* <Link href="/about#cv">
              <Button
                sx={{
                  backgroundColor: "var(--cardBgColor)",
                  mx: 0.5,
                  color: "var(--foregroundColor)",
                }}
                startIcon={<ArticleOutlined />}
              >
                View the CV
              </Button>
            </Link> */}
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectsSection;
