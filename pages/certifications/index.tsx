import { Box, Divider, Grid, List, ListItemButton } from "@mui/material";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import Image from "next/image";

const certifications: { title: string; link: string; image: string }[] = [
  {
    title: "Introduction to Back-End Development",
    link: "https://www.coursera.org/verify/CLX29DGQ9THH",
    image: "https://i.ibb.co/jknM2xwn/coursera-into-backend-dev.png",
  },
  {
    title: "Crash Course on Python",
    link: "https://coursera.org/verify/TMMVEO43MWBB",
    image: "https://i.ibb.co/Kcj7WYKc/coursera-python-crash-course.png",
  },
  {
    title: "Using Python to Interact with the OS",
    link: "https://coursera.org/verify/H15WGEBT3CJ8",
    image: "https://i.ibb.co/3DDPCCv/coursera-python-to-interact-with-os.png",
  },
  {
    title: "The Frontend Developer Career Path",
    link: "https://scrimba.com/certificate/uKLBwESL/gfrontend",
    image: "https://i.ibb.co/77QRNw0/scrimba-frontend-career-path.png",
  },
  {
    title: "Introduction to Git and GitHub",
    link: "https://coursera.org/verify/8MK2IL9X22S6",
    image: "https://i.ibb.co/YBHzDMwm/coursera-intro-git-github.png",
  },
  {
    title: "Troubleshooting and Debugging Techniques",
    link: "https://coursera.org/verify/LHZ8ZWXK3NCH",
    image: "https://i.ibb.co/Pz6t9VTD/coursera-troubleshooting-debugging.png",
  },
  {
    title: "Configuration Management and the Cloud",
    link: "https://coursera.org/verify/OEYQ6UYY3SUN",
    image:
      "https://i.ibb.co/KxjQvsRW/coursera-configuration-management-and-cloud.png",
  },
  {
    title: "Google IT Automation with Python",
    link: "https://www.credly.com/go/yvtuplTu",
    image: "https://i.ibb.co/LXb47928/Screen-Shot-2025-02-13-at-6-16-43-PM.png",
  },
];
const Certifications = () => {
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
          <List>
            <Divider
              sx={{
                borderTop: "1px solid var(--foregroundColor)",
                opacity: 0.8,
              }}
            />
            {certifications.map((certification, index) => (
              <Link key={index} href={certification.link}>
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
                  <span>{certification.title}</span>
                  <div className="imagePro">
                    <Image
                      src={certification.image}
                      width={300}
                      height={200}
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
          <SectionTitle
            title="Certifications"
            number="III"
            description={
              <>
                This page highlights my commitment to continuous learning and
                professional development in the software development field.
                Here, you'll find a list of certifications I've earned,
                demonstrating my proficiency in specific technologies and
                methodologies. I believe that staying up-to-date with the latest
                advancements is crucial in this rapidly evolving industry, and
                I'm always eager to expand my skillset.
              </>
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Certifications;
