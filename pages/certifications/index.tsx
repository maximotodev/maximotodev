import { Container, Toolbar } from "@mui/material";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

const certifications: { title: string; link: string }[] = [
  {
    title: "Introduction to Back-End Development",
    link: "https://www.coursera.org/verify/CLX29DGQ9THH",
  },
  {
    title: "Crash Course on Python",
    link: "https://coursera.org/verify/TMMVEO43MWBB",
  },
  {
    title: "Using Python to Interact with the Operating System",
    link: "https://coursera.org/verify/H15WGEBT3CJ8",
  },
  {
    title: "The Frontend Developer Career Path",
    link: "https://scrimba.com/certificate/uKLBwESL/gfrontend",
  },
];
const gallery = () => {
  return (
    <>
      <SectionTitle title="Certifications" number="III" description={<></>} />
      <Container>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "var(--cardBgColor)",
            border: "2px solid var(--primaryColor)",
            mt: 3,
            py: 2,
            borderRadius: 5,
            textAlign: "center",
          }}
        >
          {certifications.map((certification) => (
            <Link
              target="_blank"
              key={certification.link}
              href={certification.link}
            >
              {certification.title}
            </Link>
          ))}
        </Toolbar>
      </Container>
    </>
  );
};

export default gallery;
