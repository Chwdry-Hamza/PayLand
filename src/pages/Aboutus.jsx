import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
} from "@mui/material";

// ----- IMPORT YOUR ABOUT-US IMAGES HERE -----
// import whoWeAreImg from "../../src/who-we-are.png";   // <-- add your images
// import careersImg from "../../src/careers.png";
// import contactImg from "../../src/contact-us.png";
// ---------------------------------------------

export default function AboutUs({ mode, toggleMode }) {
  const { slug } = useParams(); // "who-we-are" | "careers" | "contact"

  // ---------- THEME ----------
  const bgColor = mode === "dark" ? "#000" : "#f8f9fa";
  const textColor = mode === "dark" ? "#fff" : "#212121";
  const mutedColor = mode === "dark" ? "#ccc" : "#424242";
  const accentColor = "#ff5722"; // PayLand orange

  // ---------- TITLE MAPPING ----------
  const titles = {
    "who-we-are": "Who We Are",
    careers: "Careers",
    contact: "Contact Us",
  };
  const title = titles[slug] || slug.replace(/-/g, " ").toUpperCase();

  // ---------- ABOUT-US DATA ----------
  const aboutData = {
    "who-we-are": {
      // img: whoWeAreImg,
      subtitle: "OUR MISSION & VISION",
      description:
        "Payland is a next-generation fintech platform revolutionizing global payments.\nWe empower businesses with secure, fast, and scalable financial infrastructure to thrive in the digital economy.",
    },
    careers: {
      // img: careersImg,
      subtitle: "JOIN OUR TEAM",
      description:
        "Be part of a fast-growing team shaping the future of payments.\nWe’re hiring passionate innovators in engineering, product, compliance, and more. Grow with us.",
    },
    contact: {
      // img: contactImg,
      subtitle: "GET IN TOUCH",
      description:
        "Have questions? Need integration support?\nOur team is here 24/7. Reach out via email, phone, or schedule a demo. We’d love to hear from you.",
    },
  };

  const data = aboutData[slug];

  // ---------- NOT FOUND ----------
  if (!data) {
    return (
      <Box sx={{ bgcolor: bgColor, color: textColor, p: 4 }}>
        <Container>Page not found.</Container>
      </Box>
    );
  }

  // ---------- MAIN LAYOUT ----------
  return (
    <Box
      component="main"
      sx={{
        minHeight: "50vh",
        maxHeight: "80vh",
        bgcolor: bgColor,
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
              {/* ---------- TEXT ---------- */}
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
                  {data.description}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    mb: 4,
                    color: mutedColor,
                    fontWeight: 600,
                  }}
                >
                  {data.subtitle}
                </Typography>

                {/* BOOK A DEMO / CONTACT BUTTON */}
                <Button
                  component={Link}
                  to={slug === "contact" ? "/contact" : "/contact"}
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
                      bgcolor:
                        mode === "dark"
                          ? "rgba(255,255,255,0.2)"
                          : "#e0e0e0",
                    },
                  }}
                >
                  {slug === "contact" ? "Get in Touch" : "Book a Demo"}
                </Button>
              </Box>

              {/* ---------- IMAGE ---------- */}
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
                    overflow: "hidden",
                    borderRadius: { xs: 2, md: 4 },
                  }}
                >
                  <Box
                    component="img"
                    src={data.img}
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
              </Box>
            </Stack>
          </Container>
        </Box>
      </Container>
    </Box>
  );
}