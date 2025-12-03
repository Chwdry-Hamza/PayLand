import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Card,
  Grid,
  CardContent,
} from "@mui/material";

import SmartRouting from "../../src/SmartRouting.jpg";
import DeclineRecovery from "../../src/DeclineRecovery.jpg";
import Direct from "../../src/Direct.jpg";

import IQsoftlight from "../../src/Light Mode/IQSoft/IQSoftLogo-2.png";
import IQsofthoverlight from "../../src/Light Mode/IQSoft/IQSoftLogo-1.png";
import IQsoftdark from "../../src/Dark Mode/IQSoft/IQSoftLogo-3.png";
import IQsofthoverdark from "../../src/Dark Mode/IQSoft/IQSoftLogo-4.png";

import PronetGaminglight from "../../src/Light Mode/PronetGaming/PronetGamingLogo-2.png";
import PronetGaminghoverlight from "../../src/Light Mode/PronetGaming/PronetGamingLogo-1.png";
import PronetGamingdark from "../../src/Dark Mode/PronetGaming/PronetGamingLogo-3.png";
import PronetGaminghoverdark from "../../src/Dark Mode/PronetGaming/PronetGamingLogo-4.png";

import EveryMatrixlight from "../../src/Light Mode/EveryMatrix/EveryMatrixLogo-2.png";
import EveryMatrixhoverlight from "../../src/Light Mode/EveryMatrix/EveryMatrixLogo-1.png";
import EveryMatrixdark from "../../src/Dark Mode/EveryMatrix/EveryMatrixLogo-3.png";
import EveryMatrixhoverdark from "../../src/Dark Mode/EveryMatrix/EveryMatrixLogo-4.png";

import Digitainlight from "../../src/Light Mode/Digitain/DigitainLogo-2.png";
import Digitainhoverlight from "../../src/Light Mode/Digitain/DigitainLogo-1.png";
import Digitaindark from "../../src/Dark Mode/Digitain/DigitainLogo-3.png";
import Digitainhoverdark from "../../src/Dark Mode/Digitain/DigitainLogo-4.png";

import TipBomlight from "../../src/Light Mode/TipBom/TipBomLogo-2.png";
import TipBomhoverlight from "../../src/Light Mode/TipBom/TipBomLogo-1.png";
import TipBomdark from "../../src/Dark Mode/TipBom/TipBomLogo-3.png";
import TipBomhoverdark from "../../src/Dark Mode/TipBom/TipBomLogo-4.png";
import RedCasino from "../../src/7RedCasino.png";

import PronetGaming from "../../src/PronetGaming.png";
import EveryMatrix from "../../src/EveryMatrix.png";
import Digitain from "../../src/Digitain.png";
import TipBom from "../../src/TipBom.png";


export default function Company({ mode }) {
  const isDark = mode === "dark";
  const bg = mode === "dark" ? "#000" : "linear-gradient(90deg, #f0c392ff, #ffecd7ff, #f0c392ff)";
  const text = isDark ? "#ffffff" : "#000000";
  const accent = "#ff5722"; // PayLand Orange
  const boxBg = isDark ? "#111111" : "#f8f8f8";
  const borderColor = accent;
  const formBgColor = isDark ? "#1e1e1e" : "#f5f5f5";
  const bgColor = isDark
    ? "#000"
    : "linear-gradient(90deg, #f0c392ff, #ffecd7ff, #f0c392ff)";

  // const companies = [
  //   {
  //     name: "IQ Soft",
  //     description:
  //       "iGaming software, solutions, content and services for online casino.",
  //     link: "https://www.salesforce.com",
  //   },
  //   {
  //     name: "Pronet Gaming",
  //     image: PronetGaming,
  //     description:
  //       "iGaming software, solutions, content and services for online casino.",
  //     link: "https://www.zendesk.com",
  //   },
  //   {
  //     name: "EveryMatrix",
  //     image: EveryMatrix,
  //     description:
  //       "iGaming software, solutions, content and services for online casino.",
  //     link: "https://www.hubspot.com",
  //   },
  //   {
  //     name: "Digitain",
  //     image: Digitain,
  //     description:
  //       "Gaming software, solutions, content and services for online casino.",
  //     link: "https://www.softgamings.com",
  //   },
  //   {
  //     name: "TipBom",
  //     image: TipBom,
  //     description:
  //       "Gaming software, solutions, content and services for online casino.",
  //     link: "https://www.softgamings.com",
  //   },
  //   {
  //     name: "7RedCasino",
  //     image: RedCasino,
  //     description:
  //       "Gaming software, solutions, content and services for online casino.",
  //     link: "https://www.softgamings.com",
  //   },
  // ];

  const companies = [
  {
    name: "IQ Soft",
    light: IQsoftlight,
    dark: IQsoftdark,
    hoverLight: IQsofthoverlight,
    hoverDark: IQsofthoverdark,
    description:
      "iGaming software, solutions, content and services for online casino.",
    link: "https://www.salesforce.com",
  },
  {
    name: "Pronet Gaming",
    light: PronetGaminglight,
    dark: PronetGamingdark,
    hoverLight: PronetGaminghoverlight,
    hoverDark: PronetGaminghoverdark,
    description:
      "iGaming software, solutions, content and services for online casino.",
    link: "https://www.zendesk.com",
  },
  {
    name: "EveryMatrix",
    light: EveryMatrixlight,
    dark: EveryMatrixdark,
    hoverLight: EveryMatrixhoverlight,
    hoverDark: EveryMatrixhoverdark,
    description:
      "iGaming software, solutions, content and services for online casino.",
    link: "https://www.hubspot.com",
  },
  {
    name: "Digitain",
    light: Digitainlight,
    dark: Digitaindark,
    hoverLight: Digitainhoverlight,
    hoverDark: Digitainhoverdark,
    description:
      "Gaming software, solutions, content and services for online casino.",
    link: "https://www.softgamings.com",
  },
  {
    name: "TipBom",
    light: TipBomlight,
    dark: TipBomdark,
    hoverLight: TipBomhoverlight,
    hoverDark: TipBomhoverdark,
    description:
      "Gaming software, solutions, content and services for online casino.",
    link: "https://www.softgamings.com",
  },
  { name: "7RedCasino",
    light: RedCasino,
    dark: RedCasino,
    hoverLight: RedCasino,
    hoverDark: RedCasino,
    description: "Gaming software, solutions, content and services for online casino.", link: "https://www.softgamings.com", },
];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: bgColor,
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            letterSpacing: "0.05em",
            color: accent,
            mb: 6,
            fontSize: { xs: "1.2rem", md: "2.5rem" },
            textTransform: "uppercase",
            textAlign: "center"
          }}
        >
          Our Companies
        </Typography>

        <Grid container spacing={2}>
          {companies.map((company) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={company.name}
              sx={{ display: "flex" }}
            >
              <Card
                sx={{
                  flex: 1,
                  height: "100%",
                  maxWidth: { md: 370 },
                  borderRadius: 4,
                  boxShadow: isDark
                    ? "0 4px 20px rgba(255,255,255,0.08)"
                    : "0 4px 20px rgba(0,0,0,0.08)",
                  backgroundColor: isDark ? "#111" : "#fff",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent
                  sx={{
                    p: 4,
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flex: 1,
                    color: isDark ? "#fff" : "#212121",
                  }}
                >
                  {/* LOGO WITH HOVER & DARK/LIGHT MODE SUPPORT */}
               <Box
  sx={{
    height: 140,
    mx: "auto",
    mb: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
    borderRadius: 3,
    backgroundColor: isDark ? "#0f0f0f" : "#f6f7f8",
    border: isDark ? "3px solid #222" : "3px solid #fff",
    overflow: "hidden",
    cursor: "pointer",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.querySelector("img").src = isDark
      ? company.hoverDark
      : company.hoverLight;
  }}
  onMouseLeave={(e) => {
    e.currentTarget.querySelector("img").src = isDark
      ? company.dark
      : company.light;
  }}
>
  <img
    src={isDark ? company.dark : company.light}
    alt={company.name}
    style={{
      height: "80%",
      maxHeight: "100%",
      width: "100%",
      maxWidth: "120%",
      borderRadius: 3,
      objectFit: "contain",
      transition: "all 0.4s ease",
    }}
  />
</Box>


                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ color: isDark ? "#fff" : "#212121" }}
                  >
                    {company.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      mb: 4,
                      lineHeight: 1.8,
                      fontSize: "0.95rem",
                      color: isDark ? "#ddd" : "#555",
                    }}
                  >
                    {company.description}
                  </Typography>

                  <Button
                    variant="outlined"
                    href={company.link}
                    target="_blank"
                    rel="noopener"
                    sx={{
                      borderRadius: 30,
                      textTransform: "none",
                      fontWeight: 600,
                      px: 4,
                      py: 1.2,
                      borderColor: "#ff5722",
                      color: "#ff5722",
                      "&:hover": {
                        backgroundColor: "#ff5722",
                        color: "#fff",
                      },
                    }}
                  >
                    Visit {company.name}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* "You might also be interested in" Section - UNCHANGED */}
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              letterSpacing: "0.05em",
              color: accent,
              mb: 6,
              fontSize: { xs: "1.2rem", md: "2.5rem" },
              textTransform: "uppercase",
              mt: "40px",
            }}
          >
            You might also be interested in
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
              gap: { xs: 3, sm: 4 },
              mb: 8,
            }}
          >
            {/* CARD 1 - Smart Routing */}
            <Box
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                border: `1px solid ${borderColor || "#ddd"}`,
                backgroundColor: isDark ? "#222" : "#fff",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 16px 32px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Box sx={{ height: { xs: 250, sm: 380 }, overflow: "hidden" }}>
                <img
                  src={SmartRouting}
                  alt="Smart Routing"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Box sx={{ p: { xs: 3, sm: 4 }, textAlign: "left" }}>
                <Typography variant="h5" sx={{ fontWeight: 700, color: accent, mb: 1 }}>
                  Smart Routing
                </Typography>
                <Typography variant="body1" sx={{ color: isDark ? "#ccc" : "#555", lineHeight: 1.7 }}>
                  Navigate transactions intelligently and enhance your approvals by routing your payments through the most optimized pathways available.
                </Typography>
                <Button
                  variant="outlined"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    borderRadius: 30,
                    textTransform: "none",
                    fontWeight: 600,
                    px: 4,
                    py: 1.2,
                    mt: 5,
                    borderColor: "#ff5722",
                    color: "#ff5722",
                    "&:hover": {
                      backgroundColor: "#ff5722",
                      color: "#fff",
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Box>

            {/* CARD 2 - Decline Recovery */}
            <Box
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                border: `1px solid ${borderColor || "#ddd"}`,
                backgroundColor: isDark ? "#222" : "#fff",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 16px 32px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Box sx={{ height: { xs: 250, sm: 380 }, overflow: "hidden" }}>
                <img
                  src={DeclineRecovery}
                  alt="Decline Recovery"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Box sx={{ p: { xs: 3, sm: 4 }, textAlign: "left" }}>
                <Typography variant="h5" sx={{ fontWeight: 700, color: accent, mb: 1 }}>
                  Decline Recovery
                </Typography>
                <Typography variant="body1" sx={{ color: isDark ? "#ccc" : "#555", lineHeight: 1.7 }}>
                  Utilize our advanced suite and boost your approval ratios. Integrated into all our products, each feature is immediately ready to use.
                </Typography>
                <Button
                  variant="outlined"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    borderRadius: 30,
                    textTransform: "none",
                    fontWeight: 600,
                    px: 4,
                    py: 1.2,
                    mt: 5,
                    borderColor: "#ff5722",
                    color: "#ff5722",
                    "&:hover": {
                      backgroundColor: "#ff5722",
                      color: "#fff",
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Box>

            {/* CARD 3 - Direct */}
            <Box
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                border: `1px solid ${borderColor || "#ddd"}`,
                backgroundColor: isDark ? "#222" : "#fff",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 16px 32px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Box sx={{ height: { xs: 250, sm: 380 }, overflow: "hidden" }}>
                <img
                  src={Direct}
                  alt="Direct"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Box sx={{ p: { xs: 3, sm: 4 }, textAlign: "left" }}>
                <Typography variant="h5" sx={{ fontWeight: 700, color: accent, mb: 1 }}>
                  Direct
                </Typography>
                <Typography variant="body1" sx={{ color: isDark ? "#ccc" : "#555", lineHeight: 1.7 }}>
                  Built for businesses with their own cashier page, connect directly with our API and expand your payment solutions and global presence with ease.
                </Typography>
                <Button
                  variant="outlined"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    borderRadius: 30,
                    textTransform: "none",
                    fontWeight: 600,
                    px: 4,
                    py: 1.2,
                    mt: 5,
                    borderColor: "#ff5722",
                    color: "#ff5722",
                    "&:hover": {
                      backgroundColor: "#ff5722",
                      color: "#fff",
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}