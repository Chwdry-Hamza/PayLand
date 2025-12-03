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
import IQsoft from "../../src/IQsoft.png";
import PronetGaming from "../../src/PronetGaming.png";
import EveryMatrix from "../../src/EveryMatrix.png";
import Digitain from "../../src/Digitain.png";
import TipBom from "../../src/TipBom.png";
import RedCasino from "../../src/7RedCasino.png";

export default function Company({ mode }) {
  const isDark = mode === "dark";
  const bg = mode === "dark" ? "#000" : "linear-gradient(90deg, #f0c392ff, #ffecd7ff, #f0c392ff)";
  const text = isDark ? "#ffffff" : "#000000";
  const accent = "#ff5722"; // PayLand Orange
  const boxBg = isDark ? "#111111" : "#f8f8f8";
  const borderColor = accent;
const formBgColor = isDark ? "#1e1e1e" : "#f5f5f5"; // Light gray in light mode
  const bgColor = isDark
    ? "#000"
    : "linear-gradient(90deg, #f0c392ff, #ffecd7ff, #f0c392ff)";

  const companies = [
    {
      name: "IQ Soft",
      image: IQsoft,
      description:
        "iGaming software, solutions, content and services for online casino.",
      link: "https://www.salesforce.com",
    },
    {
      name: "Pronet Gaming",
      image: PronetGaming,
      description:
        "iGaming software, solutions, content and services for online casino.",
      link: "https://www.zendesk.com",
    },
    {
      name: "EveryMatrix",
      image: EveryMatrix,
      description:
        "iGaming software, solutions, content and services for online casino.",
      link: "https://www.hubspot.com",
    },
    {
      name: "Digitain",
      image: Digitain,
      description:
        "Gaming software, solutions, content and services for online casino.",
      link: "https://www.softgamings.com",
    },
    {
      name: "TipBom",
      image: TipBom,
      description:
        "Gaming software, solutions, content and services for online casino.",
      link: "https://www.softgamings.com",
    },
    {
      name: "7RedCasino",
      image: RedCasino,
      description:
        "Gaming software, solutions, content and services for online casino.",
      link: "https://www.softgamings.com",
    },
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
      textAlign:"center"
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
                key={company.name}
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
                  <Box
                    sx={{
                      height: 140,
                      mx: "auto",
                      mb: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 2,
                    }}
                  >
                    <Box
                      component="img"
                      src={company.image}
                      alt={company.name}
                      sx={{
                        height: "80%",
                        maxHeight: "100%",
                        width: "100%",
                        maxWidth: "120%",
                        borderRadius: 3,
                        objectFit: "cover",
                        p: 3,
                        boxShadow: isDark
                          ? "0 4px 12px rgba(255,255,255,0.12)"
                          : "0 4px 12px rgba(0,0,0,0.12)",
                        border: isDark ? "3px solid #222" : "3px solid #fff",
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
            <Box sx={{ textAlign: "center" }}>
  {/* MAIN TITLE */}
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

  {/* 3 CARDS ROW */}
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
      gap: { xs: 3, sm: 4 },
      mb: 8,
    }}
  >
    {/* CARD 1 - IT Developer */}
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
                    // href={company.link}
                    target="_blank"
                    rel="noopener"
                    sx={{
                      borderRadius: 30,
                      textTransform: "none",
                      fontWeight: 600,
                      px: 4,
                      py: 1.2,
                      mt:5,
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

    {/* CARD 2 - Driver */}
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
          src={DeclineRecovery} // Replace with your actual image
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
                    // href={company.link}
                    target="_blank"
                    rel="noopener"
                    sx={{
                      borderRadius: 30,
                      textTransform: "none",
                      fontWeight: 600,
                      px: 4,
                      py: 1.2,
                      mt:5,
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

    {/* CARD 3 - Supervisor */}
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
          src={Direct}// Replace with your actual image
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
                    // href={company.link}
                    target="_blank"
                    rel="noopener"
                    sx={{
                      borderRadius: 30,
                      textTransform: "none",
                      fontWeight: 600,
                      px: 4,
                      py: 1.2,
                      mt:5,
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
