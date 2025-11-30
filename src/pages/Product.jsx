import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import gateway from '../../src/gateway.jpg';
import cryptotocard from '../../src/gateway1.jpg';

import iban from '../../src/iban.jpg';
// import cryptotocard from '../../src/cryptotocard.png';

export default function Product({ mode, toggleMode }) {
  const { slug } = useParams(); // "Card-Payment-Gateway" | "IBAN-Solutions" | "Crypto-to-Card-Servise"

  // Theme-aware colors (same logic as navbar)
const bgColor = mode === "dark" ? "#000" : "linear-gradient(90deg, #f0c392ff, #ffecd7ff, #f0c392ff)";

  
  const textColor = mode === "dark" ? "#fff" : "#212121";
  const mutedColor = mode === "dark" ? "#ccc" : "#424242";
  const accentColor = "#ff5722"; // PayLand orange

  // Title mapping
  const titles = {
    "Card-Payment-Gateway": "Card Payment Gateway",
    "IBAN-Solutions": "IBAN Solutions",
    "Crypto-to-Card-Servise": "Crypto to Card Service",
  };
  const title = titles[slug] || slug.replace(/-/g, " ").toUpperCase();

  // Card data (description, image, subtitle)
  const cards = {
    "Card-Payment-Gateway": {
      img: gateway,
      subtitle: "Request Integration",
      description:
        "Experience the future of global payments.\nPayland Gateway connects businesses to the world through secure, compliant, and lightning-fast transactions.\nAccept Visa, Mastercard, and alternative methods with precision, trust, and global scalability.",
    },
    "IBAN-Solutions": {
      img: iban,
      subtitle: "Open Your IBAN",
      description:
        "Your dedicated banking identity — anywhere in the world.\nGain exclusive access to personalized IBAN accounts for effortless transfers, settlements, and international fund management — all within Payland’s trusted financial infrastructure.",
    },
    "Crypto-to-Card-Servise": {
      img: cryptotocard,
      subtitle: "Apply Your Card",
      description:
        "Seamless bridge between digital assets and real-world spending.\nConvert crypto into fiat instantly and enjoy true financial freedom.\nSpend globally with your Payland Card — powered by Visa and Mastercard, designed for the next generation of finance.",
    },
  };

  const card = slug ? cards[slug] : null;

  if (!card) {
    return (
      <Box sx={{ bgcolor: bgColor, color: textColor, p: 4 }}>
        <Container>Product not found.</Container>
      </Box>
    );
  }

  return (
 <Box
  component="main"
  sx={{
    minHeight: "50vh",
    maxHeight: "80vh",
    background: bgColor, // <-- use background, not bgcolor
    color: textColor,
    py: { xs: 4, md: 8 },
  }}
>

      <Container maxWidth="lg">
        <Box
          component="section"
          sx={{
            py: { xs: 6, md: 12 },
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Container
            maxWidth={false}
            sx={{
              maxWidth: 1200,
              width: "100%",
              mx: "auto",
              px: { xs: 3, md: 0 },
            }}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 4, md: 8 }}
              alignItems="center"
              justifyContent="space-between"
            >
              {/* TEXT */}
              <Box
                sx={{
                  flex: { md: 1 },
                  maxWidth: { md: "50%" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Typography
                  variant="h3"
                  component="h1"
                  sx={{
                    fontWeight: 800,
                    mb: 2,
                    lineHeight: 1.1,
                    color: accentColor,
                  }}
                >
                  {title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    lineHeight: 1.6,
                    whiteSpace: "pre-line",
                    color: textColor,
                  }}
                >
                  {card.description}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    mb: 4,
                    color: mutedColor,
                    fontWeight: 600,
                  }}
                >
                  {card.subtitle}
                </Typography>

                {/* BOOK A DEMO BUTTON */}
                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: 50,
                    px: 4,
                    py: 1.5,
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "1rem",
                    bgcolor: accentColor,
                    color: mode === "dark" ? "#000" : "#fff",
                  "&:hover": {
  bgcolor: mode === "dark" ? "#fff":"black", 
  color: mode === "dark" ? "black":"#fff",
}
                  }}
                >
                  Book a Demo
                </Button>
              </Box>

              {/* IMAGE */}
           {/* <Box
  sx={{
    flex: { md: 1 },
    maxWidth: { md: "50%" },
    position: "relative",
  }}
>
  <Box
    sx={{
      position: "relative",
      width: "100%",
      height: 0,
      paddingBottom: "90%", // Increased from 60% → 70% (makes image taller)
      overflow: "hidden",
      borderRadius: { xs: 2, md: 4 },
    }}
  >
    <Box
      component="img"
      src={card.img}
      alt={title}
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "contain",
        boxShadow: `0 20px 40px ${
          mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.3)"
        }`,
        transition: "box-shadow 0.3s ease",
      }}
    />
  </Box>
</Box> */}
        
   <Box
  sx={{
    flex: { md: 1 },
    maxWidth: { md: "50%" },
    position: "relative",
  }}
>
  <Box
    sx={{
      position: "relative",
      width: "100%",
      height: 0,
      paddingBottom: "90%",
      overflow: "visible", // ✅ YE BADLO! hidden se visible karo
      // borderRadius hata do
    }}
  >
    <Box
      component="img"
      src={card.img}
      alt={title}
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "24px", // ✅ Yahan hai curve
        boxShadow: `0 20px 40px ${
          mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.3)"
        }`,
        transition: "all 0.3s ease",
      }}
    />
  </Box>
</Box>

            </Stack>
          </Container>
        </Box>
      </Container>
    </Box>
  );
}