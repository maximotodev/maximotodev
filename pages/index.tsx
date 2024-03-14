
import { TypeAnimation } from 'react-type-animation';
import { RemoveRedEyeOutlined } from "@mui/icons-material";
import { Button, Container, Toolbar } from "@mui/material";
import Image from 'next/image';
import Head from "next/head";
import Link from "next/link";
import { aboutInfo } from "@/data/aboutData";
import heroImg from '@/assets/images/hero-img.png';

export default function Home() {
  return (
    <>
      {/* DEV INDICATION */}
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
    <Image 
      className="hero-img" 
      src={heroImg} 
      alt="Maximoto hero image"
      width={200}
    />
    <TypeAnimation
          wrapper='div'
          className="typing-animation"
          sequence={[
          // Same substring at the start will only be typed once, initially
          'Hi, I am Maximoto 👋, a software developer',
          3000,
          'Hi, I am Maximoto 👋, a bitcoiner',
          3000,
          'Hi, I am Maximoto 👋, an aspiring cypherpunk',
          3000,
          'Hi, I am Maximoto 👋, a professional mixologist',
          3000,
          ]}
          omitDeletionAnimation={true}
          speed={50}
          style={{ fontSize: '2rem', color: "black", fontFamily: "'Press Start 2P', cursive", textAlign: 'center', lineHeight: '1.5'}}
          repeat={Infinity}
        />
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
      {/* DEV INDICATION */}

    
    </>
  );
}
