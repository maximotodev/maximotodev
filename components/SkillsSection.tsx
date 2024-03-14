import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import SectionTitle from "../SectionTitle";
import Skill_cloud from "./Skill_cloud";
import { skillsData } from "@/data/skillsData";
import { ExpandMore } from "@mui/icons-material";
import Image from "next/image";

const SkillsSection = () => {
  return (
    <Box
      className="skills-section"
      sx={{ my: 5, pb: { md: 5 }, px: { xs: 0, sm: 2 } }}
    >
      <Grid
        container
        alignItems={"center"}
        sx={{
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: { xs: "center", md: "start" },
            mt: { xs: 5, md: 0 },
            pr: { md: 4 },
          }}
        >
          <Skill_cloud />
        </Grid>
        <Grid item xs={12} md={6} sx={{ position: "relative" }}>
          <SectionTitle
            title={skillsData.title}
            number={skillsData.number}
            // description={skillsData.description}
            description={<></>}
          />
          {skillsData.stack.map((stack, key) => (
            <Accordion
              key={key}
              sx={{
                backgroundColor: "var(--cardBgColor)",
                color: "var(--foregroundColor)",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{ display: "flex", alignItems: "center", gap: 2 }}
                >
                  {stack.icon}
                  {stack.name}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: { xs: 1, sm: 1.5 },
                  transition: "0.3s",

                  ".tech": {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "0.3s",
                    gap: 0.1,
                    width: { xs: 68 },
                    height: { xs: 70 },
                    py: 4,
                    borderRadius: 2,
                    backgroundColor: "var(--backgroundColor)",
                    border: "1px solid transparent",
                  },
                  ".tech:hover": {
                    transition: "0.3s",
                    boxShadow: "0 0 0.5rem #000",
                    cursor: "pointer",
                    border: "1px solid var(--primaryColor)",
                    backgroundColor: "transparent",
                  },
                  ".techName": {
                    textTransform: "capitalize",
                    textAlign: "center",
                    fontSize: 10,
                    // opacity: 0.8,
                  },

                  img: {
                    width: { xs: 50 },
                    // height={60}
                  },
                }}
              >
                {stack.tech.map((tech, index) => (
                  <span key={index} className="tech">
                    {tech.img === "" ? (
                      tech.icon
                    ) : (
                      <Image
                        src={tech.img}
                        alt=""
                        priority
                        // width={70}
                        // height={60}
                      />
                    )}
                    <span className="techName">{tech.name}</span>
                  </span>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default SkillsSection;
