import { Container, Toolbar } from "@mui/material";
import SectionTitle from "@/SectionTitle";

const gallery = () => {
  return (
    <>
    <SectionTitle title="Gallery" number="III" description={<></>} />
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
    <h2>THIS IS STILL IN DEVELOPMENT </h2>
    {/* <Link href="https://v1-michelbtompe.vercel.app/">
      <Button
        startIcon={<RemoveRedEyeOutlined />}
        color="warning"
        variant="contained"
      >
        FIRST VERSION
      </Button>
    </Link> */}
  </Toolbar>
</Container>
    </>
    )
};

export default gallery;
