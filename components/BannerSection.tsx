import { Avatar, Box, Grid, IconButton, Tooltip } from "@mui/material";
import bgContent from "@/assets/images/bgContent.png";
import Image from "next/image";
import Experiences from "./Experiences";
import SectionTitle from "./SectionTitle";
import { aboutInfo } from "@/data/aboutData";

const BannerSection = () => {
  return (
    <Box
      className="banner-section"
      sx={{
        position: "relative",
      }}
    >
      <Image
        className="bg-content"
        src={bgContent}
        alt=""
        style={{ maxWidth: "80%", height: "auto" }}
        priority
      />

      <Grid container alignItems={"center"}>
        <Grid
          sx={{ position: "relative", px: { xs: 0, sm: 2 } }}
          item
          xs={12}
          md={6}
        >
          <SectionTitle
            title={aboutInfo.name}
            number={aboutInfo.number}
            description={aboutInfo.description}
          />
          <div className="pt-3">
            {aboutInfo.socials.map((social, index) => (
              <Tooltip key={index} title={social.name} arrow>
                <IconButton
                  sx={{ backgroundColor: "var(--cardBgColor)", mx: 0.5 }}
                  href={social.href}
                  target="_blank"
                >
                  {social.icon}
                </IconButton>
              </Tooltip>
            ))}
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            pl: { lg: 10 },
          }}
        >
          <Box
            sx={{
              position: "relative",
              border: "1px solid var(--primaryColorOp)",
              borderRadius: 2,
              mt: 13,
              textAlign: "center",
              maxWidth: { md: "90%", lg: "70%" },
            }}
          >
            <div>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                  pb: 10,
                  // pb: 3,
                }}
              >
                <Avatar
                  sx={{
                    width: "150px",
                    height: "150px",
                    position: "absolute",
                    top: -80,
                    border: "0.5px solid var(--primaryColor)",
                    // backgroundColor: "var(--cardBgColor)",
                  }}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    src={aboutInfo.profilePic}
                    alt=""
                  />
                </Avatar>
              </Box>
              <Box
                sx={{
                  px: 3,
                  pb: 3,
                  pt: 3,
                }}
              >
                <h3 className="title">What have I been doing?</h3>
                <Experiences />
              </Box>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BannerSection;
