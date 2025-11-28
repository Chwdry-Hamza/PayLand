// src/pages/Industry.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
} from "@mui/material";

// -----  IMPORT YOUR INDUSTRY IMAGES HERE  -----
// import tradingImg from "../../src/trading.png";       // <-- add your images
// import igamingImg from "../../src/igaming.png";
// import ecommerceImg from "../../src/ecommerce.png";
import Tradeing from '../../src/Tradeing.jpg';
import iGaming from '../../src/iGaming.jpg';
import Ecommerce from '../../src/Ecommerce.jpg';
// ---------------------------------------------

export default function Industry({ mode, toggleMode }) {
  const { slug } = useParams(); // "trading" | "igaming" | "ecommerce"

  // ---------- THEME ----------
  const bgColor = mode === "dark" ? "#000" : "linear-gradient(90deg, #f0c392ff, #ffecd7ff, #f0c392ff)";
  const textColor = mode === "dark" ? "#fff" : "#212121";
  const mutedColor = mode === "dark" ? "#ccc" : "#424242";
  const accentColor = "#ff5722"; // PayLand orange

  // ---------- TITLE MAPPING ----------
  const titles = {
    trading: "Trading (High-Volume Payments)",
    igaming: "iGaming (Gaming & Betting)",
    ecommerce: "E-commerce (Online Retail)",
  };
  const title = titles[slug] || slug.replace(/-/g, " ").toUpperCase();

  // ---------- INDUSTRY DATA ----------
  const industries = {
    trading: {
      img: Tradeing,
      subtitle: "Empower Traders → Coming Soon",
      description:
        "Empower high-frequency traders with ultra-low latency payment rails.\nSeamlessly settle cross-border trades, manage margin accounts, and integrate with any exchange via PayLand’s robust gateway.",
    },
    igaming: {
      img: iGaming,
      subtitle: "Enable iGaming Payments → Coming Soon",
      description:
        "Secure, compliant, and instant payouts for the iGaming world.\nAccept deposits from any region, process withdrawals in seconds, and stay ahead of regulatory demands with PayLand’s all-in-one solution.",
    },
    ecommerce: {
      img: Ecommerce,
      subtitle: "Simplify Online Payments → Coming Soon",
      description:
        "Frictionless checkout for every shopper, everywhere.\nAccept cards, IBAN transfers, and crypto at the same time, reduce cart abandonment, and boost conversion with PayLand’s intelligent payment orchestration.",
    },
  };

  const industry = industries[slug];

  // ---------- NOT FOUND ----------
  if (!industry) {
    return (
      <Box sx={{ bgcolor: bgColor, color: textColor, p: 4 }}>
        <Container>Industry not found.</Container>
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
        background: bgColor,
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
                  {industry.description}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    mb: 4,
                    color: mutedColor,
                    fontWeight: 600,
                  }}
                >
                  {industry.subtitle}
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

              {/* ---------- IMAGE ---------- */}
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
                    paddingBottom: "90%", // same tall ratio as Product page
                    overflow: "hidden",
                    borderRadius: { xs: 2, md: 4 },
                  }}
                >
                  <Box
                    component="img"
                    src={industry.img}
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
                    src={industry.img}
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
