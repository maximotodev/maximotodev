import { Box, Button, Divider, Grid, TextField } from "@mui/material";
import SectionTitle from "./SectionTitle";
import React from "react";
import { EmailOutlined, PhoneAndroid, WhatsApp } from "@mui/icons-material";
import Link from "next/link";
import ContactForm from "./ContactForm";
import Confetti from 'react-confetti';
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from '@react-hook/window-size';

const ContactSection = () => {
  const otherContactStyle = {
    p: 2,
    pl: { lg: "22%", md: "15%" },
    display: "flex",
    alignItems: "center",
    gap: 3,
    flexDirection: { xs: "row-reverse", sm: "row" },
    // justifyContent: "center",
    // backgroundColor: "#000",
  };
  return (
    <Box
      className="contacts-section"
      sx={{ my: 5, pt: { md: 5 }, px: { xs: 0, sm: 2 } }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            position: "relative",
            top: { md: -100 },
          }}
        >
          <SectionTitle title="Contact" number="V" description={<>Shoot me a message</>} />
          <ContactForm />
        </Grid>
        <Grid
          item
          justifyContent={"center"}
          xs={12}
          md={6}
          sx={{
            pt: { xs: 5, md: 3 },
            display: "flex",
            flexWrap: "wrap",
            flexDirection: { lg: "column", md: "row" },
            justifyContent: { xs: "end", md: "start" },
            ".MuiDivider-root.MuiDivider-fullWidth": {
              borderColor: "var(--cardBgColor)",
            },
          }}
        >
          <Box sx={otherContactStyle}>
            <PhoneAndroid
              sx={{ fill: "var(--primaryColorOp)", fontSize: 50 }}
            />
            <div>
              <h3>Phone</h3>
              <Link target="_blank" href={"tel:018602123808"}>
                +1 860 212 3808
              </Link>
              {/* <Divider sx={{ height: 2 }} />
              <Link target="_blank" href={"tel:237670915614"}>
                +237 670 915 614
              </Link> */}
            </div>
          </Box>
          <Box sx={otherContactStyle}>
            <WhatsApp sx={{ fill: "#41a941", fontSize: 50 }} />
            <div>
              <h3>WhatsApp</h3>
              <Link target="_blank" href={"https://wa.me/18602123808"}>
                +1 860 212 3808
              </Link>
              {/* <Divider sx={{ height: 2 }} />
              <Link target="_blank" href={"https://wa.me/237670915614"}>
                +237 670 915 614 (M. BTOMPE)
              </Link> */}
            </div>
          </Box>
          <Box sx={otherContactStyle}>
            <EmailOutlined sx={{ fill: "#ff7171", fontSize: 50 }} />
            <div>
              <h3>Email</h3>
              <Link target="_blank" href={"mailto:maximotodev@proton.me"}>
              maximotodev@proton.me
              </Link>
              {/* <Divider sx={{ height: 2 }} />
              <Link
                target="_blank"
                href={"mailto:rufin.btompe@facsciences-uy1.cm"}
              >
                rufin.btompe@facsciences-uy1.cm
              </Link>
              <Divider sx={{ height: 2 }} />
              <Link
                target="_blank"
                href={"mailto:michel.btompe@dolphgroup.com"}
              >
                michel.btompe@dolphgroup.com
              </Link> */}
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
