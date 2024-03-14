import { logoContent, socialLinks } from "@/utils/variables";
import { Box, Container, Divider, Toolbar } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        // backgroundColor: "var(--cardBgColor)",
        pb: 2,
      }}
    >
      <Divider sx={{ mb: 3, borderColor: "var(--cardBgColor)" }} />
      <Container sx={{ px: { xs: 0, sm: "24px" } }}>
        <Toolbar
          disableGutters
          sx={{
            py: 1,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            "& a": { fontSize: "17px" },
            gap: 3,
          }}
        >
          <div>
            <h4 style={{ opacity: 0.7, fontWeight: "lighter" }}>
              Made with 🧡 2024 &copy;
            </h4>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                // justifyContent: "space-between",
                // alignItems: "center",
                // gap: 1,
              }}
            >
              <Link
                href="/"
                style={{
                  marginRight: 2,
                }}
                className="brand"
              >
                {logoContent}
              </Link>
            </Box>
          </div>
          <div>
            <h4 style={{ opacity: 0.7, fontWeight: "lighter" }}>Socials</h4>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 1,
              }}
            >
              {Object.entries(socialLinks).map(([index, social]) => (
                <Link key={index} target="_blank" href={social.link}>
                  {social.name}
                </Link>
              ))}
            </Box>
          </div>
        </Toolbar>
      </Container>
    </Container>
  );
};

export default Footer;
